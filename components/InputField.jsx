import { useState } from "react";
import { View, TextInput } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const InputField = ({
  type,
  value,
  placeholder,
  handleChange,
  hideOption,
  containerStyle,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View
      className={`bg-white min-h-[54px] flex flex-row justify-center items-center rounded-full px-4 ${containerStyle}`}
    >
      <TextInput
        value={value}
        onChangeText={handleChange}
        placeholder={placeholder}
        secureTextEntry={type === "password" && !showPassword}
        className="flex-1 font-base font-poppins-medium bg-transparent mr-3"
      />
      {hideOption && (
        <MaterialCommunityIcons
          onPress={() => setShowPassword(!showPassword)}
          name={showPassword ? "eye-off" : "eye"}
          size={20}
          className="text-primary"
        />
      )}
    </View>
  );
};
export default InputField;
