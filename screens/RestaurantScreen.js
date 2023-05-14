import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";
const RestaurantScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    );
  }, []);

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();
  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
            <FontAwesome5 name="arrow-left" size={20} color="#00BBCC" />
          </TouchableOpacity>
        </View>

        {/* contents */}
        <View className="bg-white">
          <View className="px-4 pt-2">
            <Text className="text-3xl font-bold">{title}</Text>
          </View>
          <View className="flex-row space-x-2 ml-1 items-center">
            <Ionicons name="star" size={22} color="#9c9b9a" />
            <Text className="text-xs text-gray-500 ">
              <Text className="text-green-500">{rating}</Text> . {genre}
            </Text>
            {/* <Ionicons name="ios-location-outline" size={24} color="black" /> */}
            <View className="flex-row ">
              <Ionicons
                name="ios-location-outline"
                size={22}
                color="#9c9b9a "
              />
              <Text className="text-xs text-gray-500 ">
                <Text className="text-green-500"> Nearby</Text> - {address}
              </Text>
            </View>
          </View>
          <Text className="text-gray-500 mt-2 pb-4 ml-1">
            {short_description}
          </Text>

          {/* help */}
          <TouchableOpacity className="flex-row bg-white items-center space-x-2 p-4 border-y border-gray-300">
            <Ionicons name="ios-help-circle-outline" size={22} color="9c9b9a" />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy
            </Text>
            <FontAwesome5 name="chevron-right" size={22} color="#00BBCC" />
          </TouchableOpacity>

          <View className="pb-36">
            <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
            {dishes.map((dish) => (
              <DishRow
                key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.short_description}
                price={dish.price}
                image={dish.image}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
