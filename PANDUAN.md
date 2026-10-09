# MyDuro — Panduan Tugas Pekan Demo Modul 1

Aplikasi riwayat transaksi toko (penjualan & pembelian). Satu layar statis: header, ringkasan total, daftar transaksi.

## 1. Cara menjalankan

1. Ekstrak `myduro-app.zip` (misalnya ke `Downloads`).
2. Buka folder `myduro-app` di VS Code (File → Open Folder).
3. Di terminal VS Code:
   ```
   npm install
   npx expo start --go
   ```
4. Scan QR pakai Expo Go (HP & laptop satu Wi-Fi). Tidak bisa connect → `npx expo start --go --tunnel`.

Struktur:
```
src/
├── app/_layout.tsx            → layout (tanpa header bawaan)
├── app/index.tsx              → halaman utama
├── components/TransaksiCard.tsx → kartu satu transaksi
├── data/transaksi.ts          → array of objects (data dummy)
├── styles/styles.ts           → external styling
├── types/transaksi.ts         → type & interface
└── utils/hitung.ts            → custom function & loop
```

## 2. Saran pembagian kerja (GitHub, 3 anggota)

| Anggota | File | Kriteria yang dikuasai |
|---|---|---|
| A | `types/transaksi.ts`, `data/transaksi.ts` | Type & Array of Objects |
| B | `utils/hitung.ts`, `components/TransaksiCard.tsx` | Custom Function & Loop |
| C | `styles/styles.ts`, `app/index.tsx` | Inline & External Styles |

Tiap orang commit dari akunnya sendiri, tapi **semua anggota wajib paham semua file**, karena tanya-jawab & modifikasi dilakukan individu.

## 3. Di mana tiap kriteria penilaian berada

**Custom Function & Loop (10%)**
- `hitungTotal` (arrow function), `formatRupiah`, `formatTanggal`, `hitungRingkasan` → `utils/hitung.ts`
- Loop `for` di `hitungRingkasan` (menjumlah penjualan/pembelian)
- Loop `map()` di `index.tsx` untuk menampilkan setiap `TransaksiCard`, dengan `key={trx.id}`

**Type & Array of Objects (10%)**
- `type JenisTransaksi = "penjualan" | "pembelian"` → union type
- `interface Transaksi` → `readonly id`, `catatan?` opsional
- `daftarTransaksi: Transaksi[]` → array of objects

**Inline & External Styles (10%)**
- External: `StyleSheet.create` di `styles/styles.ts`, di-import ke komponen
- Inline: `style={{ ... }}` pada teks selisih (warna berubah untung/rugi), dan `style={[styles.x, { ... }]}` (gabungan) di kartu

## 4. Contoh pertanyaan asisten (latihan jawab sendiri)

1. Kenapa `id` pakai `readonly`? → Supaya id tidak bisa diubah setelah objek dibuat.
2. Apa arti `?` di `catatan?` → Properti opsional; transaksi boleh tidak punya catatan.
3. Kalau saya isi `jenis: "retur"`, apa yang terjadi? → Error TypeScript, karena union type hanya menerima `"penjualan"` atau `"pembelian"`.
4. Kenapa `map()` butuh `key`? → Agar React bisa mengenali tiap item walau urutan berubah; tanpa key muncul warning.
5. Bedanya `() => ( )` dan `() => { }`? → `( )` implicit return, `{ }` harus tulis `return`.
6. Kenapa `for` tidak ditulis langsung di dalam `return ( ... )`? → JSX hanya menerima expression, bukan statement.
7. Bedanya `formatRupiah` dan `formatRupiah()`? → Tanpa `()` = merujuk fungsi; dengan `()` = menjalankan.
8. Kapan pakai inline vs external style? → Inline untuk style dinamis/cepat (warna untung/rugi); external untuk style yang rapi & dipakai ulang.
9. Arti `===`? → Perbandingan ketat: nilai DAN tipe harus sama.
10. Apa itu `?:` di `isPenjualan ? "+" : "-"`? → Ternary operator: kondisi ? kalau benar : kalau salah.

## 5. Contoh modifikasi live (latih tanpa AI!)

| Permintaan asisten | Yang diubah |
|---|---|
| Tambah 1 transaksi baru | Tambah objek di `data/transaksi.ts` |
| Tambah properti `metodeBayar` | Tambah di `interface Transaksi`, isi di data, tampilkan di `TransaksiCard` |
| Ganti warna tema | Ubah `warna.utama` di `styles.ts` |
| Tampilkan hanya penjualan | `daftarTransaksi.filter((t) => t.jenis === "penjualan").map(...)` |
| Ubah loop `for` jadi `while` | Lihat Modul hal. 39 (`let i = 0; while (i < data.length) {...; i++}`) |
| Ganti `map()` jadi `FlatList` | `import { FlatList }`, props `data`, `keyExtractor`, `renderItem` |
| Tampilkan nomor urut | `map((trx, index) => ...)` lalu tampilkan `index + 1` |
| Ubah format tanggal jadi nama bulan lengkap | Ubah isi array `namaBulan` di `formatTanggal` |

**Catatan:** `FlatList` di dalam `ScrollView` akan memunculkan warning. Kalau diminta pakai FlatList, pindahkan header ke prop `ListHeaderComponent` dan hapus `ScrollView`.
