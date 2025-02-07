"use server"
import { getProduct } from '@/app/actions/products-action'

export default async function Product({params}:{params:{id:number}}){
    const {id} =params;
  const product=await getProduct(id)

if(product){
    const item=product[0]
    return <div>Product  {item.id}</div>
}
    else 
    return <div>Producto no encontrado</div>
}