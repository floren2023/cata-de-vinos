"use server"
import Image from 'next/image';
import { getPost } from '../../actions/posts-actions'


export default async function Blog({params}:{params:{id:number}}){
    const {id} =params;
  const post=await getPost(id)

if(post){
    const item=post[0]
    return (
        <div className="flex flex-col gap-5 mx-auto  mt-20 pt-5 justify-center  
              bg-gradient-to-r from-red-200 via-gray-100 to-gray-200  pl-20 pr-20">
       
          
          
          <div
            className=" text-center  italic  text-red-800 font-medium  
              text-xl pt-6   font-[merienda] "
          >
            {item.title}
          </div>
        
            <div className="content-center justify-center items-center mx-auto rounded-md  ">
              <Image src={item.image} className="object-cover p-3 rounded-md mx-auto  " width={600} height={300} alt={item.title} />
            </div>
      
            <div
              className=" mx-auto pb-10 pt-5  prose lg:prose-lg md:prose-md prose-red tracking-wide pr-20 pl-20"
            >
            {item.article}
          </div>
          <div className="flex flex-inline justify-between italic pb-10">
            <div className="text-red-800">  {item.authorId}</div>
            <div className="text-green-600">{item.datePubl.toISOString()}</div>
          </div>
        </div>
        
    )

}
    else 
    return <div>Blog no encontrado</div>
}