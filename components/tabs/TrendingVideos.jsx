import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import images from "../../constants/images";
import { ResizeMode, Video } from "expo-av";

const TrendingItem = ({ item, activeItem }) => {
  const [played, setPlayed] = useState(false);
  const zoomIn = {
    0: {
      scale: 0.9,
    },
    1: {
      scale: 0.95,
    },
  };
  const zoomOut = {
    0: {
      scale: 0.95,
    },
    1: {
      scale: 0.9,
    },
  };

  return (
    <Animatable.View
      animation={activeItem === item.$id ? zoomIn : zoomOut}
      duration={500}
      className="mr-2"
    >
      {played ? (
        <Video
          className="w-44 h-64 rounded-2xl overflow-hidden shadow-lg mt-4 mb-4"
          source={{
            uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
        />
      ) : (
        <TouchableOpacity
          onPress={() => setPlayed(!played)}
          className="flex items-center justify-center shadow-lg"
        >
          <ImageBackground
            source={{
              uri: item.thumbnail,
            }}
            className="w-44 h-64 rounded-2xl overflow-hidden shadow-lg shadow-black/40 mt-4 mb-4"
            resizeMode="cover"
          />
          {!played && (
            <View className="absolute top-4 w-44 h-64 bg-black/20 rounded-2xl overflow-hidden shadow-lg shadow-black/20 border border-black/90" />
          )}
          {!played && (
            <Image
              source={images.play}
              className="absolute w-12 h-12 overflow-hidden drop-shadow-lg opacity-90"
              resizeMode="contain"
            />
          )}
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

const TrendingVideos = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(posts[1]);

  const viewableItemsChanged = ({ viewableItems }) => {
    console.log("Viewable Items Changed:", viewableItems);
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  };

  return (
    <FlatList
      data={posts}
      horizontal
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TrendingItem item={item} activeItem={activeItem} />
      )}
      onViewableItemsChanged={viewableItemsChanged}
      ListEmptyComponent={() => (
        <View className=" border border-black/10 bg-black/5 rounded-lg mt-2">
          <Text className="text-center my-20">Currently Empty!</Text>
        </View>
      )}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 65,
      }}
      // contentOffset={{ x: 170 }}
    />
  );
};

export default TrendingVideos;
