import { BASE_URL } from "@/constant";
import { Categories, Product } from "@/types";

export const getCategoriesApi = async (): Promise<
  typeof Categories | undefined
> => {
  try {
    const response = await fetch(`${BASE_URL}/products/categories`);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
