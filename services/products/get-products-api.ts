import { BASE_URL } from "@/constant";
import { Product } from "@/types";

export const getProductsApi = async ({
  limit = 6,
}: {
  limit?: number;
}): Promise<Product[] | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}/products?limit=${limit}`);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
