import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

// Layout utama: satu halaman tanpa header bawaan
export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
