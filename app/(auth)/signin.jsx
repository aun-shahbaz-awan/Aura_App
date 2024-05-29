import { View, Text, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../../components/InputField";
import CustomButtom from "../../components/CustomButtom";
import { login } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignIn = () => {
  const { setLoading } = useGlobalContext();
  const [formInput, setFormInput] = useState({ email: "", password: "" });

  const handleSignIn = async () => {
    if (!formInput.email || !formInput.password) {
      Alert.alert("please Fill all the fields to proceed!");
      return;
    }
    setLoading(true);
    try {
      const result = await login(formInput.email, formInput.password);
      console.log("Register Result:", result);
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView className="bg-back h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full relative px-4">
          <Text className="absolute top-4 left-4 text-2xl font-poppins-bold ml-px">
            Sign In
          </Text>
          <Text className="text-sm font-poppins-medium mt-16 ml-1 mb-1">
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
          <Text className="text-sm font-poppins-medium mt-4 mb-1 ml-auto pr-1">
            Forget Password
          </Text>
          <CustomButtom
            key="SignIn"
            title="Sign In"
            containerStyle="bg-primary rounded-full mt-4"
            textStyle=" text-base"
            handlePress={handleSignIn}
          />
          <Text className="text-sm text-center items-center font-poppins-medium pr-1 mt-3">
            Don't have an account?{" "}
            <Link href="signup" className=" text-blue-600 underline">
              Signup
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
