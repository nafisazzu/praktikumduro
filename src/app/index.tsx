// =============================================
// HALAMAN UTAMA MyDuro - Riwayat Transaksi
// =============================================
import { useMemo, useState } from "react";
import { View, Text, ScrollView, Pressable, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { hitungRingkasan, formatRupiah } from "../utils/hitung";
import { styles, warna } from "../styles/styles";
import { JenisTransaksi } from "../types/transaksi";
import { useTransaksi } from "../context/TransaksiContext";
import TransaksiCard from "../components/TransaksiCard";

type Filter = "semua" | JenisTransaksi;
const OPSI_FILTER: Filter[] = ["semua", "penjualan", "pembelian"];

export default function Index() {
  const router = useRouter();
  const { daftar, loading } = useTransaksi();
  const [filter, setFilter] = useState<Filter>("semua");

  // Dihitung ulang hanya jika daftar berubah
  const ringkasan = useMemo(() => hitungRingkasan(daftar), [daftar]);

  // Dihitung ulang hanya jika daftar atau filter berubah
  const daftarTampil = useMemo(
    () => (filter === "semua" ? daftar : daftar.filter((trx) => trx.jenis === filter)),
    [daftar, filter]
  );

  if (loading) {
    return (
      <View style={styles.tengah}>
        <ActivityIndicator size="large" color={warna.utama} />
      </View>
    );
  }

  const untung = ringkasan.selisih >= 0;

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* ---------- HEADER ---------- */}
        <View style={styles.header}>
          <View style={styles.headerBaris}>
            <View style={styles.headerKiri}>
              <Ionicons name="storefront" size={28} color={warna.putih} />
              <Text style={styles.judulApp}>MyDuro</Text>
            </View>

            {/* push: membuka halaman tambah di atas stack */}
            <Pressable style={styles.tombolTambah} onPress={() => router.push("../tambah")}>
              <Ionicons name="add" size={18} color={warna.utama} />
              <Text style={styles.teksTombol}>Tambah</Text>
            </Pressable>
          </View>
          <Text style={styles.subJudul}>
            Riwayat transaksi toko · {ringkasan.jumlahTransaksi} transaksi
          </Text>

          {/* ---------- RINGKASAN ---------- */}
          <View style={styles.ringkasanBaris}>
            <View style={[styles.kotakRingkasan, { marginRight: 6 }]}>
              <Ionicons name="trending-up" size={20} color={warna.hijau} />
              <Text style={styles.labelRingkasan}>Penjualan</Text>
              <Text style={[styles.nilaiRingkasan, { color: warna.hijau }]}>
                {formatRupiah(ringkasan.totalPenjualan)}
              </Text>
            </View>

            <View style={[styles.kotakRingkasan, { marginLeft: 6 }]}>
              <Ionicons name="trending-down" size={20} color={warna.merah} />
              <Text style={styles.labelRingkasan}>Pembelian</Text>
              <Text style={[styles.nilaiRingkasan, { color: warna.merah }]}>
                {formatRupiah(ringkasan.totalPembelian)}
              </Text>
            </View>
          </View>

          <View style={styles.kotakSelisih}>
            <Text style={styles.labelRingkasan}>Selisih (penjualan − pembelian)</Text>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                color: untung ? warna.hijau : warna.merah,
              }}
            >
              {formatRupiah(ringkasan.selisih)}
            </Text>
          </View>
        </View>

        {/* ---------- FILTER + DAFTAR TRANSAKSI ---------- */}
        <View style={styles.isi}>
          <Text style={styles.judulBagian}>Riwayat Transaksi</Text>

          <View style={styles.filterBaris}>
            {OPSI_FILTER.map((opsi) => (
              <Pressable
                key={opsi}
                style={[styles.chip, filter === opsi && styles.chipAktif]}
                onPress={() => setFilter(opsi)}
              >
                <Text style={[styles.teksChip, filter === opsi && styles.teksChipAktif]}>
                  {opsi}
                </Text>
              </Pressable>
            ))}
          </View>

          {daftarTampil.length === 0 ? (
            <Text style={styles.kosong}>Belum ada transaksi.</Text>
          ) : (
            daftarTampil.map((trx) => (
              <TransaksiCard
                key={trx.id}
                data={trx}
                onPress={() =>
                  router.push({ pathname: "../detail/[id]", params: { id: trx.id } })
                }
              />
            ))
          )}
        </View>
      </ScrollView>
    </View>
  );
}