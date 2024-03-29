import React from "react";
import { useState } from "react";
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

export default function Home() {
  const [email, onChangeEmail] = useState("");
  return (
    <View className="flex-1 items-center justify-center bg-slate-950 text-gray-100">
      <StatusBar style="auto" />
      <View className="mt-5 space-y-2 flex justify-center items-center flex-col w-full px-8">
        <Text className="text-gray-200 text-2xl font-bold sm:text-3xl">
          Log in to your account
        </Text>
        <Text className="text-gray-200">
          Don't have an account?{" "}
          <Text className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign up
          </Text>
        </Text>
        <View className="w-full py-2">
          <Text className="text-gray-400">Email</Text>
          <TextInput
            value={email}
            placeholder="Enter Email..."
            onChangeText={onChangeEmail}
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent border border-gray-200/50 focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </View>
        <View className="mt-3 w-full">
          <Text className="text-gray-400">Password</Text>
          <TextInput
            secureTextEntry
            placeholder="Enter Password..."
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent border border-gray-200/50 focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </View>
        <View className="py-3 w-full items-center space-y-4">
          <Pressable
            onPress={() => Alert.alert(`Email: ${email}`)}
            className="flex flex-row justify-center w-full  px-4 py-2  bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
          >
            <Text className="text-white font-medium text-xl">Login</Text>
          </Pressable>
          <Text className="text-white font-normal text-sm">OR</Text>
          <Pressable
            onPress={() => Alert.alert("Button Pressed")}
            className=" flex flex-row justify-center items-center w-full mt-4 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
          >
            <AntDesign name="google" size={24} color="white" />
            <Text className="text-white font-medium text-lg ml-2">
              Continue with Google
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}