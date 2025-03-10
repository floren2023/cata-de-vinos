import { getCategories } from "@/app/actions/category-actions";
import { AddForm } from "./formTest";
import { DeleteForm } from "./delete-form";


export default async function Test(){
 let data=await getCategories()
 const categories=data

 return(
    <main className="mt-20 pt-10">
    <div className="w-2/3 mx-auto border-2 border-gray-300 p-4 h-[700px]  mb-10 rounded-md shadow-sm ">
        <div  className=" text-center pb-5 txt-gray-400 font-medium text-xl ">Categories</div>
        <AddForm/>
        <ul className="pt-6 flex flex-col gap-2">
            <div className="grid grid-cols-3 gap-2 ">
        {categories.map((category)=>(
            
            <li key={category.id} className="border-gray-200 border-2 flex flex-inline gap-2 p-2 justify-between">
             {category.name} 
             <DeleteForm id={category.id} name={category.name}/> 
             </li>
               
               
              )  )}
              </div>
           
        </ul>
</div>
    </main>
 )

}