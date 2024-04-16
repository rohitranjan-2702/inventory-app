import { Image, TouchableOpacity } from "react-native";
import React from "react";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Image
        source={iconUrl}
        style={{ width: 20, height: 20 }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
