"use server";


import { category, product } from "@/app/types/all-types";

import { getProducts } from "@/app/actions/products-actions";
import { getCategories } from "@/app/actions/category-actions";
import FormProduct from "./FormProduct";



export default async function Products() {
  type products =product[];
  type categories =category[];
 
  const products = await getProducts();
  const categories = await getCategories();

  
  return (
    <div className="">
      
      <FormProduct categories={categories} products={products}/>
    </div>
  );
}
