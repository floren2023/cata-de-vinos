

import React from "react";
import {  getCategories } from "@/app/actions/category-actions";
import CategoryForm from "./CategoryForm";
import {handleDeleteCategory, handleAddCategory} from './handle'
import Table from "./Table";


export default async  function CategoriesForm() {


  const categories= await getCategories();
  
  
  return (
    <div className="mt-20">
   <CategoryForm handleAddCategory={handleAddCategory}/>
<Table categories={categories} />
   
    </div>
  );
}
