"use server";


import { category, product } from "@/app/types/all-types";

import { getProducts } from "@/app/actions/products-actions";
import { getCategories } from "@/app/actions/category-actions";
import FormProduct from "./FormProduct";

type categories =category[];
  type products= {
    product:product,
    category:category
     }[]

export default async function Products() {
  
  
 
  const products = await getProducts();
  const categories = await getCategories();

  
  return (
    <div className="">
      
      <FormProduct  products={products} categories={categories}/>
    </div>
  );
}
