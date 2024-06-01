import { View, Text, Image, TouchableOpacity } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";

const VideoCard = ({ title, thumbnail, video, avatar }) => {
  return (
    <View className="mb-5 w-full">
      <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
        <Image
          source={{ uri: thumbnail }}
          className="w-full max-w-[360px] h-48 border border-black/10 bg-black/40 shadow-lg mx-auto rounded-xl"
          resizeMode="cover"
        />
      </TouchableOpacity>
      <View className="mt-3 flex flex-1 flex-row items-start">
        <Image
          source={{ uri: avatar }}
          className="h-12 w-12 border border-black/30 rounded-full mr-1"
          resizeMode="contain"
        />
        <Text className="flex-1 px-1 mt-1 text-sm font-poppins-medium line-clamp-2">
          {title}
        </Text>
      </View>
    </View>
  );
};

export default VideoCard;
