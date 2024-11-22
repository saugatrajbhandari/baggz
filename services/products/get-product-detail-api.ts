import { BASE_URL } from "@/constant";
import { Product, ProductDetail } from "@/types";

export const getProductDetailApi = async ({
  id,
}: {
  id: string;
}): Promise<ProductDetail | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
