import { View, Text, FlatList } from "react-native";
import React from "react";
import VideoCard from "./VideoCard";

const TrendingVideos = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      //   data={[]}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <Text className="bg-black/10 py-20 mx-10 mb-6 mt-4 px-20">
          TRRRRRRR
        </Text>
      )}
      horizontal
      ListEmptyComponent={() => (
        <View className=" border border-black/10 bg-black/5 rounded-lg mt-2">
          <Text className="text-center my-20">Currently Empty!</Text>
        </View>
      )}
    />
  );
};

export default TrendingVideos;
