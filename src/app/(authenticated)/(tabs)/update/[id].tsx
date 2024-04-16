import React from "react";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Pressable,
  SafeAreaView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import useData from "@/hooks/useData";

export default function Home() {
  // item_name, category_name, price, quantity;
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  const [price, setPrice] = useState("");
  const { addData } = useData();

  const body = {
    item_name: name,
    category_name: category,
    price: Number(price),
    quantity: Number(quantity),
  };

  const submit = async () => {
    const res = addData(
      "https://inventory-management-bsxw.onrender.com/api/v1/addProduct?role=ADMIN",
      body
    );

    console.log(res);

    if (res) {
      Alert.alert("Invalid credentials");
      setCategory("");
    }
  };

  // if (loading) {
  //   return (
  //     <View className="h-screen flex items-center justify-center bg-slate-950 text-gray-100">
  //       <StatusBar style="auto" />
  //       <Text className="text-gray-200 text-3xl">Loading...</Text>
  //     </View>
  //   );
  // }

  return (
    <View className="flex-1 items-center justify-center bg-slate-950 text-gray-100">
      <StatusBar style="auto" />
      <View className="mt-5 space-y-2 flex justify-center items-center flex-col w-full px-8">
        <Text className="text-gray-200 text-3xl font-bold sm:text-3xl mb-2">
          Add Product
        </Text>
        <View className="w-full py-2">
          <Text className="text-gray-400">Name</Text>
          <TextInput
            value={name}
            placeholder="Enter Name..."
            onChangeText={setName}
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent border border-gray-200/50 focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </View>
        <View className="mt-3 w-full">
          <Text className="text-gray-400">Category</Text>
          <TextInput
            value={category}
            onChangeText={setCategory}
            placeholder="Choose..."
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent border border-gray-200/50 focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </View>
        <View className="mt-3 w-full">
          <Text className="text-gray-400">Price</Text>
          <TextInput
            keyboardType="numeric"
            value={price}
            onChangeText={setPrice}
            placeholder="Choose..."
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent border border-gray-200/50 focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </View>
        <View className="mt-3 w-full">
          <Text className="text-gray-400">Quantity</Text>
          <TextInput
            value={quantity}
            keyboardType="numeric"
            onChangeText={setQuantity}
            placeholder="Choose..."
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent border border-gray-200/50 focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </View>
        <View className="py-3 w-full items-center space-y-4 mt-4">
          <Pressable
            onPress={() => submit()}
            className="flex flex-row justify-center w-full  px-4 py-2  bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
          >
            <Text className="text-white font-medium text-xl">Update</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
