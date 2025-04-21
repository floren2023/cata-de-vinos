
import { getCategories } from '../actions/category-actions'
import {  getCategoryProducts, getFilteredProducts, getPriceProducts, getProducts } from '../actions/products-actions'
import NavigationCategory from '../_components/NavigationCategory'
import { category } from '../types/all-types'
import Productos from './productos'


export default async function Products( { searchParams 
}: { 
  searchParams: { 
    search: string, 
     category:string,
     price:string,    
  } 
}
){ 
  const search=typeof searchParams.search==='string'?searchParams.search:undefined
  const category=typeof searchParams.category==='string'?searchParams.category:undefined
  const price=typeof searchParams.price==='string'?searchParams.price:undefined
  


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

      if(price!=='none' &&price!=undefined){
        
        const filteredProducts=await getPriceProducts({price: price})
        
         products= filteredProducts
        }
 
    return(
       
 <div  className="mt-20 pr-10 pl-10 pt-4 bg-gradient-to-r from-zinc-100 via-zinc-100 to-red-100"  >
  <NavigationCategory categories={categories}  />
 
  <Productos  products={products}  /> 
 
 
</div>

    )

}