// =============================================
// UTILITY: delay (Modul 3 - Promise constructor)
// =============================================

// Membuat Promise yang baru selesai (resolve) setelah `ms` milidetik.
// Dipakai untuk mensimulasikan server yang lambat.
// Contoh: await delay(1000);  -> menunggu 1 detik
export function delay(ms: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve(); // "janji" ditepati setelah waktu habis
    }, ms);
  });
}
