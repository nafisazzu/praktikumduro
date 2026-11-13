// Komponen pesan error + tombol "Coba lagi"
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles, warna } from "../styles/styles";

interface ErrorMessageProps {
  pesan: string;
  onCobaLagi?: () => void; // opsional: kalau tidak dikirim, tombol tidak tampil
}

export default function ErrorMessage({ pesan, onCobaLagi }: ErrorMessageProps) {
  return (
    <View style={styles.tengah}>
      <Ionicons name="cloud-offline" size={48} color={warna.merah} />
      <Text style={[styles.teksInfo, { color: warna.merah }]}>{pesan}</Text>
      {onCobaLagi && (
        <Pressable style={styles.tombolUtama} onPress={onCobaLagi}>
          <Text style={styles.teksTombolUtama}>Coba lagi</Text>
        </Pressable>
      )}
    </View>
  );
}
