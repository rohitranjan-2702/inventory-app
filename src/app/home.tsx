import { Link, Stack, useRouter, useSegments } from "expo-router";
import React from "react";
import {
  Pressable,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useAuthStore } from "store/authStore";
import { COLORS, icons, images, SIZES } from "../../constants";
import ScreenHeaderBtn from "@/components/common/header/ScreenHeaderBtn";
import LoginBtn from "@/components/LoginBtn";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Page() {
  const { user, logout, isAuthenticated } = useAuthStore();
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white justify-center">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension="60%"
              handlePress={console.log("ok")}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={images.profile}
              dimension="100%"
              handlePress={console.log("ok")}
            />
          ),
          headerTitle: "",
        }}
      />
      <View className="flex-1 justify-between py-16 px-4 md:px-6 ">
        {isAuthenticated() ? (
          <>
            <View className="flex flex-col  h-full items-center gap-4 text-center">
              <Text
                role="heading"
                className=" text-center native:text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-6xl font-regular "
              >
                Hello! {user?.name || "User"}
              </Text>
              <View>
                <Text className="mx-auto max-w-[700px] text-lg text-center text-gray-500 md:text-xl dark:text-gray-400">
                  Email : {user?.email}
                </Text>
                <Text className="mx-auto max-w-[700px] text-lg text-center text-gray-500 md:text-xl dark:text-gray-400">
                  Role : {user?.role}
                </Text>
                <View className="py-6 gap-4">
                  <TouchableOpacity
                    onPress={() => router.push("/addProduct")}
                    className="p-4 bg-gray-300 w-fit rounded-full flex flex-row items-center justify-center gap-4"
                  >
                    <AntDesign name="plus" size={24} color="black" />
                    <Text className="text-lg font-bold">Add Product</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => router.push("/updateSales")}
                    className="p-4 bg-gray-300 w-fit rounded-full flex flex-row items-center justify-center gap-4"
                  >
                    <AntDesign name="plus" size={24} color="black" />
                    <Text className="text-lg font-bold">Update Sales</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => router.push("/salesman")}
                    className="p-4 bg-gray-300 w-fit rounded-full flex flex-row items-center justify-center gap-4"
                  >
                    <MaterialCommunityIcons
                      name="file-document"
                      size={24}
                      color="black"
                    />
                    <Text className="text-lg font-bold">Generate Bill</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => router.push("/salesman")}
                    className="p-4 bg-gray-300 w-fit rounded-full flex flex-row items-center justify-center gap-4"
                  >
                    <AntDesign name="search1" size={24} color="black" />
                    <Text className="text-lg font-bold">Search Item</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => router.push("/table")}
                    className="p-4 bg-gray-300 w-fit rounded-full flex flex-row items-center justify-center gap-4"
                  >
                    <AntDesign name="table" size={24} color="black" />
                    <Text className="text-lg font-bold">View Table</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <LoginBtn text="Logout" handlePress={logout} />
          </>
        ) : (
          <>
            <View className="flex flex-col h-full items-center gap-4 text-center">
              <Text
                role="heading"
                className="text-3xl text-center native:text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Welcome to Project Inventory
              </Text>
              <Text className="mx-auto max-w-[700px] text-lg text-center text-gray-500 md:text-xl dark:text-gray-400">
                Login to your account to access your role.
              </Text>
            </View>
            {/* <Link href="/login" className="w-full"> */}
            <LoginBtn text="Login" handlePress={() => router.push("/login")} />
            {/* </Link> */}
          </>
        )}
      </View>
    </SafeAreaView>
  );
}
