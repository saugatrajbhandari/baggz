import React from "react";
import { Image, Text, View } from "react-native";
import { ProductDetail } from "@/types";

type CartCardProps = {
  product: ProductDetail;
};

const CartCard: React.FC<CartCardProps> = ({ product }) => {
  return (
    <View className="bg-white p-4  shadow-md rounded-lg">
      <View className="flex-row items-center">
        {/* Product Image */}
        <Image
          source={{ uri: product.image }}
          className="w-20 h-20 mr-4 rounded-md"
          resizeMode="contain"
        />

        {/* Product Details */}
        <View className="flex-1">
          <Text className="text-xl font-bold text-gray-800" numberOfLines={1}>
            {product.title}
          </Text>
          <Text className="text-sm text-gray-500 capitalize">
            {product.category}
          </Text>
          <Text className="text-base font-semibold text-green-600">
            Npr {product.price.toFixed(2)}
          </Text>
        </View>
      </View>

      <View className="mt-4">
        <View className="w-full h-1 bg-neutral-300" />
      </View>

      <View className="mt-3 flex-row justify-between">
        <Text className="font-semibold">Total Order ({product.quantity})</Text>
        <Text className="text-base font-semibold text-green-600">
          Npr {product.price * (product?.quantity || 0)}
        </Text>
      </View>
    </View>
  );
};

export default CartCard;
