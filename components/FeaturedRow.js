import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ title, description, featuredCategory }) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "featured"] {
      ...,
      restaurants[]->{
        ...,
        dishes[] ->,
        type-> {
          name
        }
          },
        }[0]
    `
        // ,
        //     { id }
      )
      .then((data) => {
        setRestaurants(data.restaurants);
      })
      .catch((err) => console.log("err", err));
  }, []);
  // [id]

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <FontAwesome5 name="arrow-right" size={18} color="#00CCBB" />
      </View>
      <Text className="px-4 text-xs">{description}</Text>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 15 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* restaurants cards */}
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            dishes={restaurant.dishes}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
        {/* <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="sushie"
          rating={4.2}
          genre="chineese"
          address="test address"
          short_description="A short description"
          dishes={[]}
          long={4}
          lat={90}
        />

        
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="sushie"
          rating={4.2}
          genre="chineese"
          address="test address"
          short_description="A short description"
          dishes={[]}
          long={4}
          lat={90}
        /> */}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
