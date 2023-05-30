import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  TextInput,
  Platform,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const statusBarStyle =
    Platform.OS === "ios" ? "dark-content" : "light-content";

  return (
    <>
      <StatusBar
        style={{ marginTop: StatusBar.currentHeight }}
        barStyle={statusBarStyle}
      />
      <SafeAreaView className="bg-white pt-5">
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Delivery Now!
            </Text>
            <Text className="font-bold items-center text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
          <UserIcon size={35} color="#00ccbb" />
        </View>
        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
            <MagnifyingGlassIcon size={20} color="grey" />
            <TextInput
              placeholder="Restaurants and cuisines"
              keyboardType="default"
              className="mx-4"
            />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>

        {/* Body */}
      </SafeAreaView>
      <ScrollView>
        {/* Catrgories */}
        <Categories />
        {/* Features Rows */}
      </ScrollView>
    </>
  );
};

export default HomeScreen;
