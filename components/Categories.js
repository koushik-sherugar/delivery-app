import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";
const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "category"]
    `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 10, paddingHorizontal: 10 }}
    >
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}

      {/* <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing title1"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing title2"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing title3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing title1"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing title2"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing title3"
      /> */}
    </ScrollView>
  );
};

export default Categories;
