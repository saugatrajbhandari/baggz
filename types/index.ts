export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export enum CategoryEnum {
  Electronics = "electronics",
  Jewelery = "jewelery",
  Mens = "men's clothing",
  Women = "women's clothing",
}

export const Categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
] as const;

export type CategoryType = (typeof Categories)[number];

export interface ProductDetail {
  category: string;
  description: string;
  quantity?: number;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
}

export interface Rating {
  count: number;
  rate: number;
}
export interface CartProduct {
  id: number;
  userId: number;
  date: Date;
  products: ProductCart[];
  __v: number;
}
interface ProductCart {
  productId: number;
  quantity: number;
}
