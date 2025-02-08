import {promises as fs} from 'fs'
import path from 'path'
import {compileMDX} from 'next-mdx-remote/rsc'
import Image from 'next/image'

export async function generateMetadata({params}:{params:{slug:string}}){
  const content=await fs.readFile(path.join(process.cwd(),'app/blog/content',`${params.slug}.mdx`),'utf-8')
  const {frontmatter}=await compileMDX<{titulo:string}>({
    source:content,
    options:{
      parseFrontmatter:true
    }

  })
  return {
    title:`${frontmatter.titulo}`
  }
}
 
export default async function Page({params}:{params:{slug:string}}) {
  
    const content=await fs.readFile(path.join(process.cwd(),'app/blog/content',`${params.slug}.mdx`),'utf-8')
    const data=await compileMDX<{titulo:string,img:string}>({
      source:content,
      options:{
        parseFrontmatter:true
      }

    })
  return (
    <div className='mx-auto justify-center content-center'>
      <h3 className='font-[merienda] text-red-800 text-center'>{data.frontmatter.titulo}</h3>
      <div className='mx-auto justify-center'>
        <Image src={data.frontmatter.img} alt={data.frontmatter.titulo} width={500} height={300} className='mx-auto rounded-md '/>
      </div>
      <div>
      {data.content}
      </div>
    </div>
  )
  
}