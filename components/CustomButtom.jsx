import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButtom = ({
  title,
  handlePress,
  containerStyle,
  isLoading,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-blue-600 min-h-[54px] items-center justify-center ${containerStyle} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-lg text-white font-poppins-medium ${textStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButtom;
