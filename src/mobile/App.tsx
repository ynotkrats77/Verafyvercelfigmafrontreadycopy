import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import { HomeScreen } from './src/screens/HomeScreen';
import { COLORS } from './src/config/theme';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const { isDark, colors } = useTheme();

  return (
    <NavigationContainer theme={{
      dark: isDark,
      colors: {
        primary: COLORS.cyan.DEFAULT,
        background: colors.bg,
        card: colors.surface,
        text: colors.text.primary,
        border: colors.border,
        notification: COLORS.cyan.light,
      }
    }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.bg }
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Add more screens here as they are converted */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Main() {
  const { isDark } = useTheme();
  
  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <AppNavigator />
    </>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
