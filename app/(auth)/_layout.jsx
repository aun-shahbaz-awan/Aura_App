import React from "react";
import { Redirect, Stack } from "expo-router";
import { useGlobalContext } from "../../context/GlobalProvider";

const AuthLayout = () => {
  const { loading, isLogin } = useGlobalContext();
  if (!loading && isLogin) return <Redirect href="/home" />;

  return (
    <Stack>
      <Stack.Screen name="signin" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;
