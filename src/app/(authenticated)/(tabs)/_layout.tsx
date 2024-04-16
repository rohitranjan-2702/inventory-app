import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";

export default function _layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "black" }}>
      <Tabs.Screen
        name="addProduct"
        options={{
          title: "addProduct",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="table"
        options={{
          title: "table",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="salesmanager"
        options={{
          title: "Sales Manager",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="generateBill"
        options={{
          title: "Generate Bill",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
