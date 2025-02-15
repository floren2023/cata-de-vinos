

import { Suspense } from 'react'
import { getCategories } from '../actions/category-actions'
import {  getCategoryProducts, getFilteredProducts, getPriceProducts, getProducts } from '../actions/products-actions'
import NavigationCategory from '../components/NavigationCategory'

import { category } from '../types/all-types'
import Productos from './productos'


export default async function Products( { searchParams 
}: { 
  searchParams: { 
    search: string, 
     category:string,
     priceMin:number,
     priceMax:number
  } 
}
){ 
  const search=typeof searchParams.search==='string'?searchParams.search:undefined
  const category=typeof searchParams.category==='string'?searchParams.category:undefined
  const priceMin=typeof searchParams.priceMin==='number'?searchParams.priceMin:undefined
  const priceMax=typeof searchParams.priceMax==='number'?searchParams.priceMax:undefined


    type categories=category[]
    const categories=await getCategories()
    let products=await getProducts()
    

    if(search!=''&&search!=undefined){
     const filteredProducts=await getFilteredProducts({query:search})
     
      products= filteredProducts
     }

     if(category!=''&&category!=undefined){
      const filteredProducts=await getCategoryProducts({category:category})
      
       products= filteredProducts
      }

      if((priceMin!=0 &&priceMin!=undefined) &&(priceMax!=0 &&priceMax!=undefined)){
        const filteredProducts=await getPriceProducts({minPrice:priceMin, maxPrice:priceMax})
        
         products= filteredProducts
        }
 
    return(
       
 <div  className="mt-20 pr-10 pl-10 pt-4 bg-gradient-to-r from-zinc-100 via-zinc-100 to-red-100"  >
  <NavigationCategory categories={categories}  />
  <Suspense fallback={<div>Loading products...</div>}>
  <Productos  products={products}  /> 
 </Suspense>
 
</div>

    )

}