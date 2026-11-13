import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { TransaksiProvider } from "../context/TransaksiContext";
import { warna } from "../styles/styles";

export default function RootLayout() {
  return (
    <TransaksiProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: warna.utama },
          headerTintColor: warna.putih,
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="tambah" options={{ title: "Tambah Transaksi" }} />
        <Stack.Screen name="detail/[id]" options={{ title: "Detail Transaksi" }} />
        <Stack.Screen name="barang/index" options={{ title: "Katalog Barang" }} />
        <Stack.Screen name="barang/[id]" options={{ title: "Detail Barang" }} />
        <Stack.Screen name="demo" options={{ title: "Demo" }} />
      </Stack>
    </TransaksiProvider>
  );
}
