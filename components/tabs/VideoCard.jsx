import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ResizeMode, Video } from "expo-av";
import images from "../../constants/images";

const VideoCard = ({ title, thumbnail, video, avatar }) => {
  const [played, setPlayed] = useState(false);
  return (
    <View className="mb-5 w-full">
      {played ? (
        <Video
          className="w-full max-w-[360px] h-48 border border-black/10 bg-black/40 shadow-lg mx-auto rounded-xl"
          source={{
            uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
        />
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlayed(!played)}
          className="flex items-center justify-center"
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full max-w-[360px] h-48 border border-black/10 bg-black/40 shadow-lg mx-auto rounded-xl"
            resizeMode="cover"
          />
          <Image
            source={images.play}
            className="absolute w-12 h-12 overflow-hidden drop-shadow-lg opacity-90"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}

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
