import CartCard from "@/components/cart/cart-card";
import { getProductInCartApi } from "@/services/cart/get-product-in-cart-api";
import { getProductDetailApi } from "@/services/products/get-product-detail-api";
import { CartProduct, Product, ProductDetail } from "@/types";
import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

export default function Cart() {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>();
  const [products, setProduct] = useState<ProductDetail[]>([]);

  useEffect(() => {
    (async () => {
      const cartResponse = await getProductInCartApi();
      setCartProducts(cartResponse);
    })();
  }, []);

  useEffect(() => {
    if (!cartProducts) return;

    const cartProductWithIdAndQuantity = cartProducts[0].products;

    (async () => {
      const fetchedProducts: ProductDetail[] = await Promise.all(
        cartProductWithIdAndQuantity.map(async (product) => {
          const productResponse = await getProductDetailApi({
            id: String(product.productId),
          });
          return {
            ...productResponse,
            quantity: product.quantity,
          } as ProductDetail;
        })
      );

      setProduct(fetchedProducts);
    })();
  }, [cartProducts]);

  return (
    <View className="flex-1 px-4 mt-4">
      <FlatList
        numColumns={1}
        contentContainerClassName="gap-2"
        data={products}
        renderItem={({ item: product }) => (
          <CartCard key={product.id} product={product} />
        )}
      />
    </View>
  );
}
