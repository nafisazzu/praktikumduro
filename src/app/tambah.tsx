import { useEffect, useState } from "react";
import { View, Text, TextInput, ScrollView, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useTransaksi } from "../context/TransaksiContext";
import { formatRupiah } from "../utils/hitung";
import { styles } from "../styles/styles";
import { JenisTransaksi } from "../types/transaksi";

export default function TambahTransaksi() {
  const router = useRouter();
  const { tambahTransaksi } = useTransaksi();

  const [namaBarang, setNamaBarang] = useState<string>("");
  const [jumlah, setJumlah] = useState<string>("");
  const [satuan, setSatuan] = useState<string>("");
  const [hargaSatuan, setHargaSatuan] = useState<string>("");
  const [jenis, setJenis] = useState<JenisTransaksi>("penjualan");
  const [catatan, setCatatan] = useState<string>("");
  const [error, setError] = useState<string>("");

  // Pesan error dihapus setiap kali pengguna mengubah isian utama
  useEffect(() => {
    setError("");
  }, [namaBarang, jumlah, hargaSatuan]);

  const total = (Number(jumlah) || 0) * (Number(hargaSatuan) || 0);

  const handleSimpan = () => {
    if (namaBarang.trim() === "" || !(Number(jumlah) > 0) || !(Number(hargaSatuan) > 0)) {
      setError("Nama barang, jumlah, dan harga satuan harus diisi dengan benar.");
      return;
    }

    tambahTransaksi({
      tanggal: new Date().toISOString().slice(0, 10),
      namaBarang: namaBarang.trim(),
      jumlah: Number(jumlah),
      satuan: satuan.trim() || "pcs",
      hargaSatuan: Number(hargaSatuan),
      jenis,
      catatan: catatan.trim() || undefined,
    });

    // back: kembali ke halaman utama yang ada di bawah stack
    router.back();
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.isi}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.label}>Jenis transaksi</Text>
      <View style={styles.filterBaris}>
        {(["penjualan", "pembelian"] as JenisTransaksi[]).map((opsi) => (
          <Pressable
            key={opsi}
            style={[styles.chip, jenis === opsi && styles.chipAktif]}
            onPress={() => setJenis(opsi)}
          >
            <Text style={[styles.teksChip, jenis === opsi && styles.teksChipAktif]}>
              {opsi}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.label}>Nama barang</Text>
      <TextInput
        style={styles.input}
        placeholder="Contoh: Gula Pasir"
        value={namaBarang}
        onChangeText={setNamaBarang}
      />

      <Text style={styles.label}>Jumlah</Text>
      <TextInput
        style={styles.input}
        placeholder="Contoh: 5"
        keyboardType="numeric"
        value={jumlah}
        onChangeText={setJumlah}
      />

      <Text style={styles.label}>Satuan</Text>
      <TextInput
        style={styles.input}
        placeholder="pcs, kg, dus, ..."
        value={satuan}
        onChangeText={setSatuan}
      />

      <Text style={styles.label}>Harga satuan (Rp)</Text>
      <TextInput
        style={styles.input}
        placeholder="Contoh: 15500"
        keyboardType="numeric"
        value={hargaSatuan}
        onChangeText={setHargaSatuan}
      />

      <Text style={styles.label}>Catatan (opsional)</Text>
      <TextInput
        style={styles.input}
        placeholder="Contoh: Restock mingguan"
        value={catatan}
        onChangeText={setCatatan}
      />

      <Text style={styles.totalPreview}>Total: {formatRupiah(total)}</Text>
      {error !== "" && <Text style={styles.pesanError}>{error}</Text>}

      <Pressable style={styles.tombolUtama} onPress={handleSimpan}>
        <Text style={styles.teksTombolUtama}>Simpan</Text>
      </Pressable>
      <Pressable style={styles.tombolSekunder} onPress={() => router.back()}>
        <Text style={styles.teksTombolSekunder}>Batal</Text>
      </Pressable>
    </ScrollView>
  );
}