import { BASE_URL } from "@/constant";
import { CategoryType, Product } from "@/types";

export const getProductWithinCategoryApi = async (
  category: CategoryType
): Promise<Product[] | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}/products/category/${category}`);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
