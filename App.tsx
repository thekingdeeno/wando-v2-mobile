import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
        <SafeAreaProvider>
          {Platform.OS === 'android' && (
            <StatusBar  />
          )}
            <Navigation />
        </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
