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
    justifyContent: "space-between",
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
    // ---------- Modul 2: tombol, filter, form, detail ----------
  headerKiri: { flexDirection: "row", alignItems: "center" },
  tombolTambah: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: warna.putih,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  teksTombol: { color: warna.utama, fontWeight: "bold", marginLeft: 4 },
  tengah: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: warna.latar,
    padding: 16,
  },
  filterBaris: { flexDirection: "row", marginBottom: 12 },
  chip: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: warna.putih,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#CBD5E1",
  },
  chipAktif: { backgroundColor: warna.utama, borderColor: warna.utama },
  teksChip: { fontSize: 13, color: warna.teks },
  teksChipAktif: { color: warna.putih, fontWeight: "bold" },
  kosong: { textAlign: "center", color: warna.teksAbu, marginTop: 16 },
  label: { fontSize: 13, fontWeight: "bold", color: warna.teks, marginTop: 12, marginBottom: 4 },
  input: {
    backgroundColor: warna.putih,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: warna.teks,
  },
  pesanError: { color: warna.merah, marginTop: 12 },
  totalPreview: { fontSize: 16, fontWeight: "bold", color: warna.utama, marginTop: 16 },
  tombolUtama: {
    backgroundColor: warna.utama,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: "center",
    marginTop: 16,
  },
  teksTombolUtama: { color: warna.putih, fontWeight: "bold", fontSize: 15 },
  tombolSekunder: {
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 8,
    borderWidth: 1,
    borderColor: warna.utama,
  },
  teksTombolSekunder: { color: warna.utama, fontWeight: "bold", fontSize: 15 },
  kartuDetail: {
    backgroundColor: warna.putih,
    borderRadius: 16,
    padding: 16,
    elevation: 2,
    shadowColor: "#000",
  },
  barisDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  labelDetail: { color: warna.teksAbu, fontSize: 13 },
  nilaiDetail: {
    color: warna.teks,
    fontWeight: "600",
    fontSize: 14,
    flexShrink: 1,
    textAlign: "right",
    marginLeft: 12,
  },
  // ---------- Modul 3: katalog barang dari API ----------
  teksInfo: { color: warna.teksAbu, marginTop: 12, textAlign: "center" },
  subJudulGelap: { color: warna.teksAbu, fontSize: 13, marginBottom: 12 },
  gambarBarang: {
    width: 52,
    height: 52,
    borderRadius: 10,
    backgroundColor: "#E2E8F0",
    marginRight: 12,
  },
  gambarDetail: {
    width: "100%",
    height: 220,
    borderRadius: 14,
    backgroundColor: "#E2E8F0",
    marginBottom: 12,
  },
  barisJumlah: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  tombolJumlah: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: warna.utama,
    justifyContent: "center",
    alignItems: "center",
  },
  teksTombolJumlah: { color: warna.putih, fontSize: 20, fontWeight: "bold" },
  angkaJumlah: { fontSize: 18, fontWeight: "bold", marginHorizontal: 20, color: warna.teks },
});
