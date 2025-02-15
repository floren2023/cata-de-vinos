import React from 'react'
import { category, product } from '../types/all-types'
import Product from '../components/Product'


interface Props {
    products:{
      product:product,
      category:category
    }[],
      /* searchParams: { 
      search?: string, 
    
} */
}

async function Productos(props: Props) {
    const {products} = props

    
  
    return (
        <div  className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-10 mx-auto  pt-4 ">
        {
         
          products.map((item,index) => (
            <div key={index}>
             <Product item={item} />
             </div>
            
          ))
        }
      </div>
        
    )
}

export default Productos
