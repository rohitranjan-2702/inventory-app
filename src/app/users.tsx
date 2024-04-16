import React from "react";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Link, Stack, router, useRouter, useSegments } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useAuthStore } from "store/authStore";
import useData from "@/hooks/useData";

export default function Home() {
  const { data, refetch, error, loading } = useData();
  console.log("data: ", data);

  if (loading) {
    return (
      <View className="h-screen flex items-center justify-center bg-slate-950 text-gray-100">
        <StatusBar style="auto" />
        <Text className="text-gray-200 text-3xl">Loading...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center bg-slate-950 text-gray-100">
      <StatusBar style="auto" />
      <TouchableOpacity
        onPress={() => refetch()}
        className="bg-gray-800 p-4 rounded-full mt-4 mb-4"
      >
        <Text className="text-white">Refresh</Text>
      </TouchableOpacity>
      <View className="flex text-white flex-row gap-2 py-4">
        <Text className="text-purple-400 w-24 ">Name</Text>
        <Text className="text-purple-400 w-18 ">Category</Text>
        <Text className="text-purple-400 w-10 ">Price</Text>
        <Text className="text-purple-400 w-16 ">Quantity</Text>
        <Text className="text-purple-500 w-16 text-center"> Update</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View className="flex text-white flex-row gap-2 py-1">
            <Text className="text-blue-400 w-24 ">{item.item_name}</Text>
            <Text className="text-blue-500 w-16 text-sm">
              {item.category_name}
            </Text>
            <Text className="text-blue-400 w-10 text-sm">{item.price}</Text>
            <Text className="text-blue-500 w-16 text-center">
              {item.quantity}
            </Text>
            <TouchableOpacity
              onPress={() => router.push(`/update/${item.item_id}`)}
              className="text-blue-500 w-fit text-center"
            >
              <Text className="text-blue-500 w-fit text-center">Update</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.item_id}
        contentContainerStyle={{ columnGap: 10 }}
      />
    </View>
  );
}
