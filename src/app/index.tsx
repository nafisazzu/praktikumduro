// =============================================
// HALAMAN UTAMA MyDuro - Riwayat Transaksi
// =============================================
import { View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { daftarTransaksi } from "../data/transaksi";
import { hitungRingkasan, formatRupiah } from "../utils/hitung";
import { styles, warna } from "../styles/styles";
import TransaksiCard from "../components/TransaksiCard";

export default function Index() {
  // Custom function + loop dipanggil di sini
  const ringkasan = hitungRingkasan(daftarTransaksi);
  const untung = ringkasan.selisih >= 0;

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* ---------- HEADER ---------- */}
        <View style={styles.header}>
          <View style={styles.headerBaris}>
            <Ionicons name="storefront" size={28} color={warna.putih} />
            <Text style={styles.judulApp}>MyDuro</Text>
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
            {/* INLINE STYLING dinamis: hijau kalau untung, merah kalau rugi */}
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

        {/* ---------- DAFTAR TRANSAKSI (LOOP dengan map) ---------- */}
        <View style={styles.isi}>
          <Text style={styles.judulBagian}>Riwayat Transaksi</Text>

          {daftarTransaksi.map((trx) => (
            <TransaksiCard key={trx.id} data={trx} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
