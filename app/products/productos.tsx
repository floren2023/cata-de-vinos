"use client"
import React, { useState } from "react";
import { category, product } from "../types/all-types";
import Product from "../_components/Product";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

interface Props {
  products: {
    product: product;
    category: category;
  }[];
}

 function Productos(props: Props) {
  const { products } = props;
  const [currentPage, setCurrentPage] = useState(1);  
      const [postsPerPage]=useState(4)
      const lastPageIndex=currentPage*postsPerPage
      const firstPostIndex=lastPageIndex-postsPerPage
      const totalPosts=products.length
      const currentPosts=products.slice(firstPostIndex,lastPageIndex)
      let pages=[]
        for(let i=1; i<=Math.ceil(totalPosts/postsPerPage);i++){
            pages.push(i)
        }

  return (
    <div>
        <div className="flex flex-inline gap-3 text-end justify-end pr-10 pb-4 pt-4">
      <div className="text-gray-600 italic  text-sm tex-medium"><span className="text-red-800 font-medium">{totalPosts}</span> productos registrados</div>
              <button className="border-2 border-gray-200 text-sm px-3
          py-1 bg-gray-100 shadow-md rounded-md hover:text-red-800
           hover:border-red-800 active:border-red-800 hover:bg-red-200 active:bg-red-200 active:text-red-800"  onClick={()=>setCurrentPage(currentPage>1?currentPage-1:currentPage)}>
              < GrFormPrevious/>
              </button>
      
              {
      
      pages.map((page,index)=>{
         return(
          <button key={index} 
          onClick={()=>setCurrentPage(page)}
          className="border-2 border-gray-200 text-sm px-3
          py-1 bg-gray-100 shadow-md rounded-md hover:text-red-800
           hover:border-red-800 active:border-red-800 hover:bg-red-200 active:bg-red-200 active:text-red-800">
              {page}
          </button>
      
         )
      })
      }
      
              <button className="border-2 border-gray-200 text-sm px-3
          py-1 bg-gray-100 shadow-md rounded-md hover:text-red-800
           hover:border-red-800 active:border-red-800 hover:bg-red-200 active:bg-red-200 active:text-red-800"  onClick={()=>setCurrentPage(currentPage==pages.length?currentPage:currentPage+1)}>
              <GrFormNext/>
              </button>
            </div>
    
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-10 mx-auto  pt-4 ">
      {currentPosts.map((item, index) => (
        <div key={index}>
          <Product item={item} />
        </div>
      ))}
    </div>
    </div>
  );
}

export default Productos;
