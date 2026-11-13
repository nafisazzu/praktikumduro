// =============================================
// HALAMAN DETAIL BARANG + catat penjualan (Modul 3)
// =============================================
import { useEffect, useState } from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Barang } from "../../types/barang";
import { getBarangById, cekStok } from "../../services/barangService";
import { useTransaksi } from "../../context/TransaksiContext";
import { formatRupiah } from "../../utils/hitung";
import { styles, warna } from "../../styles/styles";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

export default function DetailBarang() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { tambahTransaksi } = useTransaksi();

  const [barang, setBarang] = useState<Barang | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const [jumlah, setJumlah] = useState<number>(1);
  const [mengecek, setMengecek] = useState<boolean>(false);
  const [pesan, setPesan] = useState<string>("");
  const [berhasil, setBerhasil] = useState<boolean>(false);

  // Ambil detail barang memakai .then() / .catch() / .finally()
  useEffect(() => {
    setLoading(true);
    getBarangById(Number(id))
      .then((hasil) => setBarang(hasil))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  const handleJual = () => {
    if (!barang) return;
    setMengecek(true);
    setPesan("");

    // cekStok() mengembalikan Promise: resolve -> .then(), reject -> .catch()
    cekStok(barang, jumlah)
      .then((info) => {
        tambahTransaksi({
          tanggal: new Date().toISOString().slice(0, 10),
          namaBarang: barang.nama,
          jumlah: jumlah,
          satuan: "pcs",
          hargaSatuan: barang.harga,
          jenis: "penjualan",
          catatan: "Dari katalog API",
        });
        setBerhasil(true);
        setPesan(info + " Transaksi tersimpan.");
      })
      .catch((err: Error) => {
        setBerhasil(false);
        setPesan(err.message);
      })
      .finally(() => setMengecek(false));
  };

  if (loading) return <Loading />;
  if (error !== "" || !barang) {
    return <ErrorMessage pesan={error || "Barang tidak ditemukan"} onCobaLagi={() => router.back()} />;
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.isi}>
      <Image source={{ uri: barang.gambar }} style={styles.gambarDetail} />

      <View style={styles.kartuDetail}>
        <Text style={styles.namaBarang}>{barang.nama}</Text>
        <Text style={styles.detail}>{barang.merek} · ⭐ {barang.rating.toFixed(1)}</Text>
        <Text style={[styles.detail, { marginTop: 8 }]}>{barang.deskripsi}</Text>
        <Text style={styles.totalPreview}>{formatRupiah(barang.harga)} / pcs</Text>
        <Text style={styles.detail}>Stok tersedia: {barang.stok}</Text>
      </View>

      {/* ---------- Catat penjualan ---------- */}
      <Text style={styles.label}>Jumlah dijual</Text>
      <View style={styles.barisJumlah}>
        <Pressable style={styles.tombolJumlah} onPress={() => setJumlah((j) => Math.max(1, j - 1))}>
          <Text style={styles.teksTombolJumlah}>−</Text>
        </Pressable>
        <Text style={styles.angkaJumlah}>{jumlah}</Text>
        <Pressable style={styles.tombolJumlah} onPress={() => setJumlah((j) => j + 1)}>
          <Text style={styles.teksTombolJumlah}>+</Text>
        </Pressable>
      </View>
      <Text style={styles.detail}>Total: {formatRupiah(barang.harga * jumlah)}</Text>

      <Pressable
        style={[styles.tombolUtama, mengecek && { opacity: 0.6 }]}
        onPress={handleJual}
        disabled={mengecek}
      >
        <Text style={styles.teksTombolUtama}>
          {mengecek ? "Mengecek stok..." : "Cek Stok & Catat Penjualan"}
        </Text>
      </Pressable>

      {pesan !== "" && (
        <Text style={[styles.teksInfo, { color: berhasil ? warna.hijau : warna.merah }]}>
          {pesan}
        </Text>
      )}

      {berhasil && (
        // dismissTo: kembali langsung ke halaman utama (melewati katalog)
        <Pressable style={styles.tombolSekunder} onPress={() => router.dismissTo("/")}>
          <Text style={styles.teksTombolSekunder}>Lihat Riwayat Transaksi</Text>
        </Pressable>
      )}
    </ScrollView>
  );
}
