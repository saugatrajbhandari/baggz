import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { getProductDetailApi } from "@/services/products/get-product-detail-api";
import { ProductDetail as ProductDetailType } from "@/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { addToCartApi } from "@/services/cart/get-product-in-cart-api";

const ProductDetail = () => {
  const { id } = useLocalSearchParams();

  const [product, setProduct] = useState<ProductDetailType>();
  const [isPending, setIsPending] = useState(false);

  const handleAddToCart = async () => {
    setIsPending(true);

    const cartResponse = await addToCartApi({
      date: new Date(),
      userId: 2,
      products: [{ productId: Number(id as string), quantity: 1 }],
    });
    if (cartResponse) {
      ToastAndroid.show("Product Added to Cart", ToastAndroid.TOP);
    }

    setIsPending(false);
  };

  useEffect(() => {
    if (!id) return;

    (async () => {
      const productDetailResponse = await getProductDetailApi({
        id: String(id),
      });
      setProduct(productDetailResponse);
    })();
  }, [id]);

  return (
    <View className="flex-1">
      <Stack.Screen options={{ title: "" }} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 200 }}
        className="px-4"
      >
        <View className="flex-col gap-4">
          <Image
            source={{ uri: product?.image }}
            className="w-41 aspect-square mt-4 rounded-2xl"
          />

          <Text className="text-2xl font-semibold">{product?.title}</Text>

          <Text className="font-medium text-lg">NPR {product?.price}</Text>

          <View className="flex-row gap-[2px] items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <FontAwesome
                key={index}
                name="star"
                color={
                  index + 1 <= Math.floor(product?.rating?.rate as number)
                    ? "#EDB310"
                    : "#a3a3a3"
                }
              />
            ))}
            <Text className="text-sm text-neutral-900">
              ({product?.rating.count})
            </Text>
          </View>
          <View>
            <Text className="text-2xl font-medium">Product Details</Text>
            <Text className="mt-2 text-lg">{product?.description}</Text>
          </View>
        </View>
      </ScrollView>

      <View className="absolute bottom-0 -translate-y-1/2 left-0 right-0 px-4 ">
        <Pressable
          disabled={isPending}
          onPress={handleAddToCart}
          className="flex-row p-4 bg-black rounded-3xl text-white justify-center"
        >
          <View className="flex-row gap-3 items-center">
            <FontAwesome name="shopping-bag" color={"#ffffff"} size={24} />
            <Text className="text-white text-xl font-medium">Add to Cart</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default ProductDetail;
