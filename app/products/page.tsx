import { getCategories } from '../actions/category-actions'
import { getProducts } from '../actions/products-action'
import NavigationCategory from '../components/NavigationCategory'
import Product from '../components/Product'
import { category } from '../types/all-types'


export default async function Products(){ 

    type categories=category[]
    const categories=await getCategories()
     const products=await getProducts()
    return(
        <div className="mt-20 pr-10 pl-10 pt-8 bg-gray-100"  >

  <NavigationCategory categories={categories}/>
    

<div  className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-10 mx-auto pl-10 pt-4 ">
  {
   
    products.map((product,id) => (
       <Product product={product} key={id}/>
      
    ))
  }
</div>
</div> 

    )

}