// =============================================
// KOMPONEN CUSTOM: satu kartu transaksi
// =============================================
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { styles, warna } from "../styles/styles";
import { Transaksi } from "../types/transaksi";
import { formatRupiah, formatTanggal, hitungTotal } from "../utils/hitung";

// Props: data yang dikirim dari luar ke komponen ini
interface TransaksiCardProps {
  data: Transaksi;
  onPress?: () => void;
}

export default function TransaksiCard({ data, onPress }: TransaksiCardProps) {
  // CONDITION: tentukan warna, ikon, dan tanda berdasarkan jenis
  const isPenjualan = data.jenis === "penjualan";
  const warnaJenis = isPenjualan ? warna.hijau : warna.merah;
  const ikon = isPenjualan ? "arrow-down-circle" : "arrow-up-circle";
  const tanda = isPenjualan ? "+" : "-";

  return (
    <Pressable style={styles.kartu} onPress={onPress}>
      {/* INLINE STYLING: warna latar ikon berubah sesuai jenis transaksi */}
      <View
        style={[
          styles.ikonBulat,
          { backgroundColor: isPenjualan ? "#DCFCE7" : "#FEE2E2" },
        ]}
      >
        <Ionicons name={ikon} size={26} color={warnaJenis} />
      </View>

      <View style={styles.kartuTengah}>
        <Text style={styles.namaBarang}>{data.namaBarang}</Text>
        <Text style={styles.detail}>
          {data.jumlah} {data.satuan} × {formatRupiah(data.hargaSatuan)}
        </Text>
        <Text style={styles.detail}>
          {formatTanggal(data.tanggal)} · {data.id}
        </Text>

        {/* Catatan hanya tampil kalau ada (properti opsional) */}
        {data.catatan ? (
          <Text style={styles.catatan}>“{data.catatan}”</Text>
        ) : null}
      </View>

      <Text style={[styles.nominal, { color: warnaJenis }]}>
        {tanda}
        {formatRupiah(hitungTotal(data))}
      </Text>
    </Pressable>
  );
}
