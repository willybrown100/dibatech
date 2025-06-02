import { Stack, usePathname } from "expo-router";
import { View, Platform, StatusBar } from "react-native";
import { useMemo } from "react";

const steps = [ "email", "password","welcome"];

export default function AuthLayout() {
  const pathname = usePathname();
  const currentScreen = pathname.split("/").pop();
  const activeStep = steps.indexOf(currentScreen ?? "");

  const showProgress = useMemo(() => {
    return steps.includes(currentScreen ?? "");
  }, [currentScreen]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#1A3A3A",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      {showProgress && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 12,
          }}
        >
          {[0, 1, 2].map((i) => (
            <View
              key={i}
              style={{
                height: 4,
                width: 30,
                backgroundColor: i <= activeStep ? "#00A86B" : "#ddd",
                marginHorizontal: 4,
                borderRadius: 2,
              }}
            />
          ))}
        </View>
      )}

      <Stack
        screenOptions={{
          headerShown: false,
          // contentStyle: { backgroundColor: "#fff" },
        }}
      >
      
        <Stack.Screen name="email" />
        <Stack.Screen name="password" />
        <Stack.Screen name="welcome" />
      </Stack>
    </View>
  );
}




