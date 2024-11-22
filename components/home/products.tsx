import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getProductsApi } from "@/services/products/get-products-api";
import { Product } from "@/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ProductCard from "../product/product-card";

const Products = () => {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    (async () => {
      const productResponse = await getProductsApi({});
      setProducts(productResponse);
    })();
  }, []);

  return (
    <View className="mt-4">
      <Text className="text-3xl font-semibold font-Lobster-Regular">
        Products
      </Text>

      <View className="mt-2 flex-row flex-wrap">
        {products?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </View>
    </View>
  );
};

export default Products;
