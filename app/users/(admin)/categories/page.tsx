//accces at client categoryForm
import React from "react";

import { getCategories } from "@/app/actions/category-actions";
import { category } from "@/app/types/all-types";



type categories=category[]
 

async function Categories() {
  const categories=await getCategories()
  
  


  return (
   <div>
     
   </div>
  )
 
}

export default Categories;
