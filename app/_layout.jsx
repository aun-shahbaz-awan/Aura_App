import { Text } from "react-native";
import React, { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { PoppinsFont } from "../constants/fonts";

SplashScreen.preventAutoHideAsync();

const RouteLayout = () => {
  const [fontsLoaded, error] = useFonts(PoppinsFont);

  useEffect(() => {
    if (error) throw new Error(error);
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error)
    return <Text className="text-3xl font">Loading!</Text>;
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RouteLayout;
