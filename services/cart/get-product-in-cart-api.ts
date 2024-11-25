import { BASE_URL } from "@/constant";
import { CartProduct, Product } from "@/types";

type AddToCartProps = {
  userId: number;
  date: Date;
  products: { productId: number; quantity: number }[];
};

export const getProductInCartApi = async (): Promise<
  CartProduct[] | undefined
> => {
  try {
    const response = await fetch(`${BASE_URL}/carts/user/2`);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const addToCartApi = async (data: AddToCartProps) => {
  try {
    const response = await fetch(`${BASE_URL}/carts`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    console.log("failed to add a product", error);
  }
};
