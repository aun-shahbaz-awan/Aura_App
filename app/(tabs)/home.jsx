import { View, Text, ScrollView, Alert, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "../../context/GlobalProvider";
import InputField from "../../components/InputField";
import TrendingVideos from "../../components/tabs/TrendingVideos";
import { getPosts } from "../../lib/appwrite";
import AllVideos from "../../components/tabs/AllVideos";
import VideoCard from "../../components/tabs/VideoCard";

const Home = () => {
  const { loggedInUser } = useGlobalContext();
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  console.log("Login In:", loggedInUser);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await getPosts();
        setPosts(result);
      } catch (error) {
        Alert.alert("Error", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log("posts:", posts);
  return (
    <SafeAreaView className="bg-back h-full">
      <FlatList
        data={posts}
        className="px-4 my-6"
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
            title={item.title}
            thumbnail={item.thumbnail}
            video={item.video}
            creator={item.username}
            avatar={item.avatar}
          />
        )}
        ListHeaderComponent={() => (
          <View>
            <Text className="ml-px">Welcome</Text>
            <Text className="text-2xl font-poppins-medium ml-px">
              {loggedInUser.username}
            </Text>

            <InputField
              type="email"
              value={searchText}
              placeholder="Search for Video Topic"
              handleChange={(e) => setSearchText(e)}
              hideOption={false}
              containerStyle="border border-primary/10 mt-3"
            />
            <Text className="font-poppins-medium mt-6 text-black/70 ml-px">
              Trending Videos
            </Text>
            <TrendingVideos posts={posts} />
          </View>
        )}
        ListEmptyComponent={() => (
          <View className=" border border-black/10 bg-black/5 rounded-lg mt-2">
            <Text className="text-center my-20">Currently Empty!</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
