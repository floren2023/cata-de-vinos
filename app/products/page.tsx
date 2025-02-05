import { getCategories } from '../actions/category-actions'
import NavigationCategory from '../components/NavigationCategory'
import { category } from '../types/all-types'
export default async function Products(){
    type categories=category[]
    const categories=getCategories()
     const products=await getProducts()
    return(
        <div className=" pr-10 pl-10 pt-8"  >

  <NavigationCategory categories={categories}/>
    
<div className="pt-6">
<div  className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 mx-auto pl-10 ">
  {
   
    products.map(({ image, name, description, favorites, price }) => (
       <Product 
        image={image}
        titulo={name}
        descripcion={description}
        favorites={favorites}
        precio={price}
      /> 
    ))
  }
</div>
</div> 
</div>
    )

}