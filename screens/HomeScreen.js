import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import SanityClient from "../sanity";

import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {}, [
    SanityClient.fetch(
      `
      *[_type == "featured"] {
        ...,
        restaurants[]->{
          ...,
          dishes[] ->
        }
      }`
    ).then((data) => {
      setFeaturedCategories(data);
    }),
  ]);
  // console.log("setFeaturedCategories", setFeaturedCategories);
  return (
    <SafeAreaView className="relative bg-white pt-3">
      {/* first header section */}
      <View className="flex-row px-4 mt-8 items-center ">
        {/* <View className=" w-16 h-16 rounded-full bg-black items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold">D</Text>
        </View> */}
        {/* <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="w-7 h-7 rounded-full bg-gray-300 p-2 "
        /> */}
        <Image
          source={{
            uri: "https://payload.cargocollective.com/1/15/494563/13468564/roo-03_1340_c.jpg",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        {/* <View className="flex-1 flex-row"> */}
        <View className=" m-2 flex-col">
          <Text className="text-gray-800">Deliver now!</Text>
          <Text className="font-semibold">Current location</Text>
        </View>
        <FontAwesome5 name="chevron-down" size={20} color="#00CCBB" />
        <FontAwesome5 name="user" size={24} color="#00CCBB" />
        {/* </View> */}
      </View>

      {/* search */}
      <View className="flex-row items-center space-x-2 mx-4 pb-2">
        <View className="p-2 items-center flex-row flex-1 bg-gray-200 space-x-2">
          <FontAwesome5 name="search" size={20} color="gray" />
          <TextInput
            placeholder="Restaurents and cuisine"
            keyboardType="default"
          />
        </View>

        <FontAwesome5 name="filter" size={20} color="#00CCBB" />
      </View>

      {/* body */}
      <ScrollView
        className="bg-gray-100 "
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* categories */}
        <Categories />
        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
        {/* featured row */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
