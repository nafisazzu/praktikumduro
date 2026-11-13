// =============================================
// HALAMAN KATALOG BARANG - data dari External API (Modul 3)
// =============================================
import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Barang } from "../../types/barang";
import { getDaftarBarang } from "../../services/barangService";
import { styles } from "../../styles/styles";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import BarangCard from "../../components/BarangCard";

export default function KatalogBarang() {
  const router = useRouter();
  const [daftarBarang, setDaftarBarang] = useState<Barang[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // Custom async function: pakai await + try/catch/finally
  const muatData = async () => {
    setLoading(true);
    setError("");
    try {
      const hasil = await getDaftarBarang(); // tunggu sampai data dari server siap
      setDaftarBarang(hasil);
    } catch (err) {
      // masuk ke sini kalau internet mati / server error / throw di service
      setError(err instanceof Error ? err.message : "Terjadi kesalahan");
    } finally {
      setLoading(false); // selalu dijalankan, berhasil maupun gagal
    }
  };

  // Ambil data sekali saat halaman pertama kali dibuka
  useEffect(() => {
    muatData();
  }, []);

  if (loading) return <Loading pesan="Mengambil data barang dari server..." />;
  if (error !== "") return <ErrorMessage pesan={error} onCobaLagi={muatData} />;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.isi}>
      <Text style={styles.subJudulGelap}>
        {daftarBarang.length} barang · sumber: dummyjson.com
      </Text>

      {daftarBarang.map((barang) => (
        <BarangCard
          key={barang.id}
          data={barang}
          onPress={() =>
            router.push({ pathname: "/barang/[id]", params: { id: String(barang.id) } })
          }
        />
      ))}

      <View style={{ height: 24 }} />
    </ScrollView>
  );
}
