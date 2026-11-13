// =============================================
// SERVICE: semua urusan mengambil data barang dari API (Modul 3)
// =============================================
import { Barang, ProdukApi, ProdukApiResponse } from "../types/barang";
import { delay } from "../utils/delay";

// Endpoint dasar. Kategori "groceries" = barang kebutuhan sehari-hari (cocok untuk toko).
const BASE_URL = "https://dummyjson.com/products";
const KURS_USD = 16000; // anggap 1 USD = Rp16.000

// Mengubah 1 object dari API (ProdukApi) menjadi object aplikasi kita (Barang).
// Di sinilah data API "dimasukkan ke dalam Object menggunakan Interface".
export function ubahKeBarang(p: ProdukApi): Barang {
  return {
    id: p.id,
    nama: p.title,
    deskripsi: p.description,
    harga: Math.round((p.price * KURS_USD) / 100) * 100, // dibulatkan ke ratusan
    stok: p.stock,
    rating: p.rating,
    merek: p.brand ?? "Tanpa merek", // ?? -> pakai nilai kanan jika brand undefined/null
    gambar: p.thumbnail,
  };
}

// ---------------------------------------------
// A) CUSTOM ASYNC FUNCTION dengan async/await
//    fetch() dan response.json() = PRE-BUILT async function (bawaan, mengembalikan Promise)
// ---------------------------------------------
export async function getDaftarBarang(): Promise<Barang[]> {
  await delay(800); // simulasi server lambat supaya indikator loading terlihat

  const response = await fetch(`${BASE_URL}/category/groceries`);

  // fetch() TIDAK otomatis gagal kalau status 404/500, jadi kita cek sendiri
  if (!response.ok) {
    throw new Error(`Gagal mengambil data (status ${response.status})`);
  }

  const data: ProdukApiResponse = await response.json();
  return data.products.map(ubahKeBarang); // array ProdukApi -> array Barang
}

// ---------------------------------------------
// B) Versi .then() (TANPA async/await)
//    Setiap .then() menerima hasil Promise sebelumnya dan mengembalikan Promise baru.
// ---------------------------------------------
export function getBarangById(id: number): Promise<Barang> {
  return fetch(`${BASE_URL}/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Barang tidak ditemukan");
      }
      return response.json(); // diteruskan ke .then() berikutnya
    })
    .then((data: ProdukApi) => ubahKeBarang(data));
}

// ---------------------------------------------
// C) PROMISE CONSTRUCTOR dengan resolve() & reject()
//    Simulasi "server" mengecek apakah stok cukup untuk dijual.
// ---------------------------------------------
export function cekStok(barang: Barang, jumlah: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (jumlah <= 0) {
        reject(new Error("Jumlah harus lebih dari 0"));
      } else if (jumlah > barang.stok) {
        reject(new Error(`Stok tidak cukup. Sisa stok hanya ${barang.stok}.`));
      } else {
        resolve(`Stok cukup. Sisa setelah dijual: ${barang.stok - jumlah}.`);
      }
    }, 1000);
  });
}
