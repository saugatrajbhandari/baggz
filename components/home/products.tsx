import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getProductsApi } from "@/services/products/get-products-api";
import { Product } from "@/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ProductCard from "../product/product-card";

const Products = () => {
  const [limit, setLimit] = useState(5);
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    (async () => {
      const productResponse = await getProductsApi({ limit });
      console.log(productResponse);
      setProducts(productResponse);
    })();
  }, [limit]);

  return (
    <View className="mt-4 flex-1">
      <Text className="text-3xl font-semibold font-Lobster-Regular">
        Products
      </Text>

      <View className="mt-2 flex-row flex-wrap">
        {products?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </View>

      {/* <View>
        <FlatList
          numColumns={2}
          data={products}
          onEndReached={() => {
            setLimit((prev) => prev + 5);
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ProductCard product={item} />}
        />
      </View> */}
    </View>
  );
};

export default Products;
