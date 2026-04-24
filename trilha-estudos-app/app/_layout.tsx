import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';



export const unstable_settings = {
  anchor: '(tabs)',
};
export default function RootLayout() {
  return (
    <Stack>
      {}
      <Stack.Screen name="index" options={{ title: 'Início', headerShown: false }} />
      <Stack.Screen name="trilhas/index" options={{ title: 'Trilhas' }} />
      <Stack.Screen name="trilhas/[id]" options={{ title: 'Detalhes da Trilha' }} />
    </Stack>
  );
}
