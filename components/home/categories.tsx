import { View, Text, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Categories as CategoriesType,
  CategoryEnum,
  CategoryType,
} from "@/types";
import { getCategoriesApi } from "@/services/categories/get-categories-api";

import { Link } from "expo-router";

const men = require("@/assets/images/category/men.png");
const women = require("@/assets/images/category/women.png");
const electronics = require("@/assets/images/category/electronics.png");
const jewelery = require("@/assets/images/category/jewelery.png");

const getCategoryLinkImage = (
  slug: CategoryType,
  categoryName: CategoryType
) => {
  const image =
    slug === "electronics"
      ? electronics
      : slug === "jewelery"
      ? jewelery
      : slug === "men's clothing"
      ? men
      : women;
  return (
    <Link
      href={{
        pathname: `/categories/${slug}`,
      }}
      asChild
    >
      <Pressable>
        <Image className="w-16 h-16" source={image} />

        <Text className="mt-1 text-center capitalize">
          {categoryName === "men's clothing" ||
          categoryName === "women's clothing"
            ? categoryName.split("'")[0]
            : categoryName.split(" ")[0]}
        </Text>
      </Pressable>
    </Link>
  );
};

const getCategory = (category: CategoryType) => {
  switch (category) {
    case "men's clothing":
      return getCategoryLinkImage(category, category);

    case "electronics":
      return getCategoryLinkImage(category, category);

    case "jewelery":
      return getCategoryLinkImage(category, category);

    case "women's clothing":
      return getCategoryLinkImage(category, category);

    default:
      break;
  }
};

const Categories = () => {
  const [categories, setCategories] = useState<typeof CategoriesType>();

  useEffect(() => {
    (async () => {
      const categoriesResponse = await getCategoriesApi();
      setCategories(categoriesResponse);
    })();
  }, []);

  return (
    <View className="mt-4">
      <Text className="text-3xl font-semibold font-Lobster-Regular">
        Categories
      </Text>

      <View className="mt-2 flex-row gap-4">
        {categories &&
          categories?.map((category) => (
            <View key={category}>{getCategory(category)}</View>
          ))}
      </View>
    </View>
  );
};

export default Categories;
