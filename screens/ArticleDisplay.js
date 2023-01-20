import { React,useRef, useState, useLayoutEffect } from "react";
import { View, Text } from 'react-native'
import { useNavigation } from "@react-navigation/native";
export default function ArticleDisplay() {
    const navigation = useNavigation();
  useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, []);
  return (
    <View className="flex-1 ">

      <Text className="mt-20">ArticleDisplay</Text>
    </View>
  )
}