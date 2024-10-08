import { View, Text, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../../components/InputField";
import CustomButtom from "../../components/CustomButtom";
import { register } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignUp = () => {
  const { loggedInUser, isLogin, setLoading } = useGlobalContext();
  const [formInput, setFormInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleCreateUser = async () => {
    if (!formInput.email || !formInput.password || !formInput.username) {
      Alert.alert("please Fill all the fields to proceed!");
      return;
    }
    setLoading(true);
    try {
      const result = await register(
        formInput.email,
        formInput.password,
        formInput.username
      );
      console.log("Register Result:", result);
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  console.log("IsLogin >>>>>>>>>>>>>>>:", isLogin);
  console.log("User >>>>>>>>>>:", loggedInUser);
  return (
    <SafeAreaView className="bg-back h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full relative px-4">
          <Text className="absolute top-4 left-4 text-2xl font-poppins-bold ml-px">
            Sign Up
          </Text>
          <Text className="text-sm font-poppins-medium mt-16 ml-1 mb-1">
            Username
          </Text>
          <InputField
            type="text"
            value={formInput.username}
            placeholder="Enter your username"
            handleChange={(e) => setFormInput({ ...formInput, username: e })}
            hideOption={false}
            containerStyle="border border-primary/10"
          />
          <Text className="text-sm font-poppins-medium mt-4 ml-1 mb-1">
            Email
          </Text>
          <InputField
            type="email"
            value={formInput.email}
            placeholder="Enter your email address"
            handleChange={(e) => setFormInput({ ...formInput, email: e })}
            hideOption={false}
            containerStyle="border border-primary/10"
          />
          <Text className="text-sm font-poppins-medium mt-4 ml-1 mb-1">
            Password
          </Text>
          <InputField
            type="password"
            value={formInput.password}
            placeholder="Enter your password"
            handleChange={(e) => setFormInput({ ...formInput, password: e })}
            hideOption={true}
            containerStyle="border border-primary/10"
          />
          <CustomButtom
            key="SignUpButton"
            title="Sign Up"
            containerStyle="bg-primary rounded-full mt-6"
            textStyle=" text-base"
            handlePress={handleCreateUser}
          />
          <Text className="text-sm text-center items-center font-poppins-medium pr-1 mt-3">
            Already have an account?{" "}
            <Link href="signin" className=" text-blue-600 underline">
              Login
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
