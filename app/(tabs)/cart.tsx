import { getProductInCartApi } from "@/services/cart/get-product-in-cart-api";
import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Tab() {
  useEffect(() => {
    (async () => {
      const cartResponse = await getProductInCartApi();

      console.log(JSON.stringify(cartResponse, null, 2));
    })();
  }, []);

  return (
    <View className="flex-1">
      <Text>Tab [Home|Settings]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
