import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Product } from "@/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={{ pathname: `/product/${product.id}` }} asChild>
      <Pressable className="w-1/2 px-[2px] py-1">
        <Image
          source={{ uri: product.image }}
          className="w-full aspect-square rounded-t-lg"
        />
        <View className="p-2 rounded-b-lg flex gap-1 bg-white">
          <Text className=" text-xl  font-semibold" numberOfLines={1}>
            {product.title}
          </Text>

          <Text className="" numberOfLines={2}>
            {product.description}
          </Text>
          <Text className="font-medium text-lg">NPR {product.price}</Text>
          <View className="flex-row gap-[2px] items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <FontAwesome
                key={index}
                name="star"
                color={
                  index + 1 <= Math.floor(product.rating.rate)
                    ? "#EDB310"
                    : "#a3a3a3"
                }
              />
            ))}
            <Text className="text-sm text-neutral-900">
              ({product.rating.count})
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

export default ProductCard;
