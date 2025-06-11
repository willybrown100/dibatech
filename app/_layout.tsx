import { SplashScreen, Stack } from "expo-router";
import "@/app/globals.css"
import { useEffect } from "react";
import {useFonts} from "expo-font"

// import * as SplashScreen from 'expo-splash-screen';

export default function RootLayout() {
   const [fontsLoaded, error]=useFonts({
    "Montserrat-Bold":require("../assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Regular":require("../assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium":require("../assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Black":require("../assets/fonts/Montserrat-Black.ttf"),
    "Montserrat-SemiBold":require("../assets/fonts/Montserrat-SemiBold.ttf"),

  })
useEffect(() => {
  if (error) throw error;

  if (!fontsLoaded) return;

  // ✅ Hide splash screen once fonts are loaded
  SplashScreen.hideAsync();

  // ✅ Apply global font (safely bypassing TS)
  (Text as any).defaultProps = {
    ...(Text as any).defaultProps,
    style: { fontFamily: 'Montserrat-Regular' },
  };
}, [fontsLoaded, error]);

  return <Stack>
    <Stack.Screen options={{headerShown:false}} name="index"/>
    <Stack.Screen options={{headerShown:false}} name="(auth)"/>
    <Stack.Screen options={{headerShown:false}} name="(tabs)"/>
    <Stack.Screen options={{headerShown:false}} name="login"/>
    <Stack.Screen options={{headerShown:false}} name="courseContent"/>
  </Stack>;
}