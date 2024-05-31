import { View, Text, FlatList } from "react-native";
import React from "react";
import VideoCard from "./VideoCard";

const AllVideos = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      //   data={[]}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => <VideoCard video={item} />}
      ListEmptyComponent={() => (
        <View className=" border border-black/10 bg-black/5 rounded-lg mt-2">
          <Text className="text-center my-20">Currently Empty!</Text>
        </View>
      )}
    />
  );
};

export default AllVideos;
