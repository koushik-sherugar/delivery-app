import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
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
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="mr-3 shadow bg-white"
      onPress={() => {
        navigation.navigate("Restaurant", {
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
        });
      }}
    >
      <Image
        // source={{
        //   uri: imgUrl,
        // }}
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-36 w-64 rounded-sm"
      />

      <View className="px-3 pb-3">
        <Text className="text-lg font-bold pt-2">{title}</Text>
        <View className="flex-row flex-1 items-center space-x-1" opacity={0.5}>
          <FontAwesome name="star" size={20} color="#00BBCC" />
          <Text className="text-gray-500 text-xs">
            <Text className="text-green-500">{rating}</Text> - {genre}
          </Text>
        </View>
      </View>

      <View className="flex-row items-center mt-0 space-x-2">
        <Ionicons name="location-outline" size={24} color="#4fd6cb" />
        <Text>{address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
