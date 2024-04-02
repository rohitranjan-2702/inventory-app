import { StateStorage } from "zustand/middleware";
// import { MMKV } from "react-native-mmkv";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const storage = new AsyncStorage();

export const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return AsyncStorage.setItem(name, value);
  },
  getItem: (name) => {
    const value = AsyncStorage.getItem(name);
    return value ?? null;
  },
  removeItem: (name) => {
    return AsyncStorage.removeItem(name);
  },
};
