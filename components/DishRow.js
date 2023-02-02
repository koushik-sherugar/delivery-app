import { View, Text } from "react-native";
import React from "react";

const DishRow = ({ _id, name, short_description, price, image }) => {
  return (
    <View>
      <Text>
        {name} {}
      </Text>
    </View>
  );
};

export default DishRow;
