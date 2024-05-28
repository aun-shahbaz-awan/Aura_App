import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButtom from "../components/CustomButtom";

export default function App() {
  return (
    <SafeAreaView className="bg-back h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full min-h-[95vh] relative justify-center px-4">
          <Text className="absolute top-0 left-4 text-2xl font-poppins-bold">
            Aura
          </Text>
          <Image
            source={images.cards}
            className="w-full max-w-[360px] shadow-lg mx-auto"
            resizeMode="contain"
          />
          <Text className="text-2xl font-poppins-semi-bold text-center mt-12">
            Explore the best content by unique people
          </Text>
          <Text className="text-sm font-poppins-medium text-center leading-4 mt-4 px-3">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aura
          </Text>
          <CustomButtom
            title="Continue with Email"
            handlePress={() => router.push("signin")}
            containerStyle="w-full bg-primary text-sm rounded-full mt-12"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
