import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const LoginBtn = ({ text, handlePress }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className="w-full bg-slate-900 py-3 px-12 rounded-full items-center justify-center "
    >
      <Text className="text-gray-200 text-xl">{text}</Text>
    </TouchableOpacity>
  );
};

export default LoginBtn;
