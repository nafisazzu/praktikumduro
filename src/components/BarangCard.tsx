// Kartu satu barang dari API
import { View, Text, Pressable, Image } from "react-native";
import { Barang } from "../types/barang";
import { styles, warna } from "../styles/styles";
import { formatRupiah } from "../utils/hitung";

interface BarangCardProps {
  data: Barang;
  onPress?: () => void;
}

export default function BarangCard({ data, onPress }: BarangCardProps) {
  const stokMenipis = data.stok < 10;

  return (
    <Pressable style={styles.kartu} onPress={onPress}>
      {/* Gambar diambil dari URL yang dikirim API */}
      <Image source={{ uri: data.gambar }} style={styles.gambarBarang} />

      <View style={styles.kartuTengah}>
        <Text style={styles.namaBarang}>{data.nama}</Text>
        <Text style={styles.detail}>⭐ {data.rating.toFixed(1)}</Text>
        <Text style={[styles.detail, { color: stokMenipis ? warna.merah : warna.teksAbu }]}>
          Stok: {data.stok} {stokMenipis ? "(menipis)" : ""}
        </Text>
      </View>

      <Text style={[styles.nominal, { color: warna.utama }]}>{formatRupiah(data.harga)}</Text>
    </Pressable>
  );
}
