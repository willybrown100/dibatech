import { Stack } from "expo-router";
import "@/app/globals.css"
// import * as SplashScreen from 'expo-splash-screen';

export default function RootLayout() {
 
  return <Stack>
    <Stack.Screen options={{headerShown:false}} name="index"/>
  </Stack>;
}