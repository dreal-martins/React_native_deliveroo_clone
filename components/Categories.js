import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* CategoriesCard */}
      <CategoriesCard
        imgUrl="https://i.pinimg.com/474x/18/9a/02/189a02d9b4b70754c99c5ed68c611a20.jpg"
        title="Testing"
      />
      <CategoriesCard
        imgUrl="https://i.pinimg.com/474x/18/9a/02/189a02d9b4b70754c99c5ed68c611a20.jpg"
        title="Testing"
      />
      <CategoriesCard
        imgUrl="https://i.pinimg.com/474x/18/9a/02/189a02d9b4b70754c99c5ed68c611a20.jpg"
        title="Testing"
      />
    </ScrollView>
  );
};

export default Categories;
