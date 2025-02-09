"use server";


import { category, product } from "@/app/types/all-types";
import ProductsForm from "../../../_test/productsForm";
import { getProducts } from "@/app/actions/products-actions";
import { getCategories } from "@/app/actions/category-actions";
import FormProduct from "./FormProduct";



export default async function Products() {
  type products =product[];
  type categories =category[];
 
  const products = await getProducts();
  const categories = await getCategories();

 
interface Props{
  categories:categories,
  products:products
}
const props:Props={
  categories:categories,
  products:products
}

  
  return (
    <div className="w-1/3 mx-auto">
      
      <FormProduct categories={categories}/>
    </div>
  );
}
