import { Inter_400Regular, Inter_500Medium, useFonts } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import Widget from './src/components/Widget';
import { theme } from './src/theme';
import * as SplashScreen from 'expo-splash-screen';


export default function App() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();
  
  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background,
    }}>
      <StatusBar 
        style="light" 
        backgroundColor='transparent'
        translucent
      />
      <Widget />
    </View>
  );
}


