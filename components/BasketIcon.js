import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItem, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";
const BasketIcon = () => {
  const items = useSelector(selectBasketItem);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);
  if (items.length === 0) return null;
  return (
    <View className="absolute bottom-10  w-full z-30">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="mx-5  text-white  rounded-md flex-row space-x-2 p-4 items-center bg-[#00BBCC]"
      >
        <Text className=" text-white font-extrabold bg-[#01A296] py-1 px-2">
          {items.length}
        </Text>
        <Text className=" font-extrabold text-white text-lg flex-1 text-center">
          View basket
        </Text>
        <Text className=" text-lg text-white ">
          <Currency quantity={basketTotal} currency="USD" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
