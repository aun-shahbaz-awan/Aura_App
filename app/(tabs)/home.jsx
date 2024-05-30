import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="bg-back h-full">
      <ScrollView
        contentContainerStyle={{ height: "100%" }}
        className="px-4 py-2"
      >
        <Text>Home</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
