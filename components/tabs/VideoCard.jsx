import { View, Text, Image } from "react-native";
import React from "react";

const VideoCard = ({ title, thumbnail, video, avatar }) => {
  return (
    <View className="mb-5 w-full">
      <View>
        <Image
          source={{ uri: thumbnail }}
          className="w-full max-w-[360px] h-48  bg-black/40 shadow-lg mx-auto rounded-xl"
          resizeMode="contain"
        />
      </View>
      <View className="mt-3 flex flex-1 flex-row items-start">
        <Image
          source={{ uri: avatar }}
          className="h-12 w-12 border border-black/10 rounded-full mr-1"
          resizeMode="contain"
        />
        <Text className="px-1 text-sm font-poppins-medium line-clamp-2">
          {title}
        </Text>
      </View>
    </View>
  );
};

export default VideoCard;
