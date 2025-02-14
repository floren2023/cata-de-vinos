"use server"
import { getProduct } from '@/app/actions/products-actions'
import { Card, CardHeader } from '@/components/ui/card';
import Image from "next/image"




export default async function Product({params}:{params:{id:number}}){
    const {id} =params;
   
  const product=await getProduct(id)

  if(product){
     let item =product[0]
   let producto=item.product
   let categoria=item.category

    return <div className='pb-20 pt-20 bg-gradient-to-r from-zinc-100 via-zinc-100 to-red-100 mt-20'>
    
    <Card className='p-10 sm:w-full md:w-full lg:w-1/2 mr-20 ml-20 sombra4 bg-white'>
        <CardHeader >
             <div className='grid sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-2 '>
                <div  className='w-auto p-5 '>
                   <Image src={producto.image} width={200} height={300} alt={producto.name}/>
            </div>
            <div className='flex flex-col py-2.5 pl-5'>
               <div className='text-red-800  text-xl pb-2 font-bold'> {producto.name}</div>
               <div className='text-gray-800 font-xl text-md pb-10'> {producto.description}</div>
               <div className='font-medium text-md text-red-800 pb-5'>EUR<span className='pl-2'> {producto.price}</span></div>
               <div className='text-green-700 font-md text-md pb-10'><span className='text-gray-700 pr-5'>En Stock:</span> {producto.instock===true?'SI':'NO'}</div>
               <div className='text-gray-800 font-md font-bold text-md pb-10 '><span className='font-normal text-gray-500 italic pr-5'>Categoria:</span> {categoria.name}</div>
               
            </div>
         </div> 
        </CardHeader>
    </Card></div>
}
    else 
    return <div>Producto no encontrado</div>
}