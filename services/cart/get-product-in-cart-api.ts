import { BASE_URL } from "@/constant";
import { Product } from "@/types";

export const getProductInCartApi = async (): Promise<Product[] | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}/carts/user/2`);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
