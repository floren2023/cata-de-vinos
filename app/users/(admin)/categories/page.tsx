"use server"

import { getCategories } from "@/app/actions/category-actions";
import { category } from "../../../types/all-types";
import CategoryForm from "./categoryForm copy";


export default async function Categories(){
    type categories=category[]
    

    const categories=await getCategories()

    return(
        <div>
           
            <CategoryForm categories={categories}/>
            
        </div>
    )
}