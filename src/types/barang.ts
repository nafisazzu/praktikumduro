// =============================================
// INTERFACE UNTUK DATA DARI API (Modul 3)
// =============================================

// 1) Bentuk SATU produk persis seperti yang dikirim server dummyjson.
//    Kita hanya menulis properti yang kita pakai, sisanya diabaikan.
export interface ProdukApi {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number; // dalam USD
  stock: number;
  rating: number;
  brand?: string; // tidak semua produk punya brand -> opsional
  thumbnail: string;
}

// 2) Bentuk RESPONSE lengkap dari endpoint list produk:
//    { products: [...], total: 27, skip: 0, limit: 30 }
export interface ProdukApiResponse {
  products: ProdukApi[];
  total: number;
  skip: number;
  limit: number;
}

// 3) Bentuk data yang dipakai DI APLIKASI KITA (bahasa Indonesia, harga Rupiah).
//    Data dari API "dimasukkan" ke object ini lewat fungsi ubahKeBarang().
export interface Barang {
  readonly id: number;
  nama: string;
  deskripsi: string;
  harga: number; // dalam Rupiah
  stok: number;
  rating: number;
  merek: string;
  gambar: string;
}
