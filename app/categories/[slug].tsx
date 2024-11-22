import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { CategoryType, Product } from "@/types";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductCard from "@/components/product/product-card";
import { getProductWithinCategoryApi } from "@/services/products/get-product-within-category-api";

const Categories = () => {
  const { slug } = useLocalSearchParams<{ slug: CategoryType }>();
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    if (!slug) return;

    (async () => {
      const categoryResponse = await getProductWithinCategoryApi(slug);
      setProducts(categoryResponse);
    })();
  }, [slug]);

  return (
    <SafeAreaView className="flex-1 px-2 ">
      <Text
        style={{ fontSize: 32 }}
        className=" font-Lobster-Regular  font-semibold  capitalize "
      >
        {slug}
      </Text>

      <FlatList
        className="mt-2"
        data={products}
        numColumns={2}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </SafeAreaView>
  );
};

export default Categories;
