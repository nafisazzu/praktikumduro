// =============================================
// EXTERNAL STYLING (Modul 1 - 3.2)
// =============================================
import { StyleSheet } from "react-native";

// Warna utama MyDuro dikumpulkan di satu tempat
export const warna = {
  utama: "#0F766E", // hijau toska
  latar: "#F1F5F9",
  putih: "#FFFFFF",
  teks: "#0F172A",
  teksAbu: "#64748B",
  hijau: "#16A34A", // penjualan (uang masuk)
  merah: "#DC2626", // pembelian (uang keluar)
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: warna.latar,
  },
  isi: {
    padding: 16,
    paddingBottom: 32,
  },

  // ---------- Header ----------
  header: {
    backgroundColor: warna.utama,
    paddingTop: 48,
    paddingBottom: 24,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerBaris: {
    flexDirection: "row",
    alignItems: "center",
  },
  judulApp: {
    fontSize: 26,
    fontWeight: "bold",
    color: warna.putih,
    marginLeft: 8,
  },
  subJudul: {
    fontSize: 14,
    color: "#CCFBF1",
    marginTop: 4,
  },

  // ---------- Kartu ringkasan ----------
  ringkasanBaris: {
    flexDirection: "row",
    marginTop: 16,
  },
  kotakRingkasan: {
    flex: 1,
    backgroundColor: warna.putih,
    borderRadius: 16,
    padding: 12,
    elevation: 3,
    shadowColor: "#000",
  },
  labelRingkasan: {
    fontSize: 12,
    color: warna.teksAbu,
    marginTop: 4,
  },
  nilaiRingkasan: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 2,
  },
  kotakSelisih: {
    backgroundColor: warna.putih,
    borderRadius: 16,
    padding: 16,
    marginTop: 12,
    elevation: 3,
    shadowColor: "#000",
  },

  // ---------- Daftar transaksi ----------
  judulBagian: {
    fontSize: 18,
    fontWeight: "bold",
    color: warna.teks,
    marginTop: 24,
    marginBottom: 12,
  },
  kartu: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: warna.putih,
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
  },
  ikonBulat: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  kartuTengah: {
    flex: 1,
    marginLeft: 12,
  },
  namaBarang: {
    fontSize: 15,
    fontWeight: "bold",
    color: warna.teks,
  },
  detail: {
    fontSize: 12,
    color: warna.teksAbu,
    marginTop: 2,
  },
  catatan: {
    fontSize: 12,
    color: warna.teksAbu,
    fontStyle: "italic",
    marginTop: 2,
  },
  nominal: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
