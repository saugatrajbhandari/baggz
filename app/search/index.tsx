import { View, Text, TextInput, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { getProductsApi } from "@/services/products/get-products-api";
import { Product } from "@/types";
import ProductCard from "@/components/product/product-card";

export default function Search() {
  const { q } = useLocalSearchParams<{ q: string }>();

  const [search, setSearch] = useState<string>();
  const [products, setProducts] = useState<Product[]>();

  const [filterProducts, setFilterProducts] = useState<Product[]>();

  useEffect(() => {
    if (!q) return;

    setSearch(q);

    (async () => {
      const products = await getProductsApi({ limit: 20 });
      setProducts(products);
      const filterWithTitle = products?.filter((product) =>
        product.title.toLowerCase().includes(q.toLowerCase())
      );

      const filterWithCategory = products?.filter((product) =>
        product.category.toLowerCase().includes(q.toLowerCase())
      );

      const filterProducts =
        (filterWithTitle?.length as number) > 0
          ? filterWithTitle
          : filterWithCategory;

      setFilterProducts(filterProducts);
    })();
  }, [q]);

  useEffect(() => {
    if (!search) {
      setFilterProducts([]);
      return;
    }

    const filterWithTitle = products?.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );

    const filterWithCategory = products?.filter((product) =>
      product.category.toLowerCase().includes(search.toLowerCase())
    );

    const filterProducts =
      (filterWithTitle?.length as number) > 0
        ? filterWithTitle
        : filterWithCategory;

    setFilterProducts(filterProducts);
  }, [search]);

  return (
    <View className="flex-1 px-4 mt-4">
      <Stack.Screen
        options={{ headerTitle: `${q.charAt(0).toUpperCase()}${q.slice(1)}` }}
      />

      <View className="relative">
        <TextInput
          value={search}
          onChangeText={(search) => setSearch(search)}
          className="border text-xl rounded-xl py-4  pl-12"
          placeholder="Search Product"
          returnKeyType="search"
        />

        <FontAwesome
          size={22}
          color={"grey"}
          name="search"
          className="absolute top-1/2  -translate-y-1/2 left-4"
        />
      </View>

      {filterProducts?.length === 0 ? (
        <Text className="text-3xl font-semibold mt-12 text-center ">
          No Products
        </Text>
      ) : (
        <FlatList
          className="mt-4"
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={filterProducts}
          renderItem={({ item }) => <ProductCard product={item} />}
        />
      )}
    </View>
  );
}
