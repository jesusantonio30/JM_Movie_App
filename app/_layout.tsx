import { Stack } from "expo-router";
import './globals.css';

export default function RootLayout() {
  return (
    <Stack>
      {/* Hides header for group tabs */}
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="movies/[id]"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
