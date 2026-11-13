// Komponen indikator loading yang bisa dipakai ulang di halaman mana pun
import { View, Text, ActivityIndicator } from "react-native";
import { styles, warna } from "../styles/styles";

export default function Loading({ pesan = "Memuat data..." }: { pesan?: string }) {
  return (
    <View style={styles.tengah}>
      <ActivityIndicator size="large" color={warna.utama} />
      <Text style={styles.teksInfo}>{pesan}</Text>
    </View>
  );
}
