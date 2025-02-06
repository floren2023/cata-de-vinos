"use server";


import { category, product } from "@/app/types/all-types";
import ProductsForm from "./productsForm";
import { getProducts } from "@/app/actions/products-action";
import { getCategories } from "@/app/actions/category-actions";



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
    <div>
      <div className="text-2xl mt-10 pl-40">Servicios</div>
      <ProductsForm props={props}/>
    </div>
  );
}
