"use server";
import React from "react";
import Image from "next/image"
import { FaBlog } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";
import { post } from "../types/all-types";
import { getPosts } from "../actions/posts-actions";
import { Card, CardContent,  CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

async function Blog() {
  type posts = post[];
  const posts = await getPosts();

  return (
    <div className="grid sm:grid-cols-1  md:grid-cols-2 grid-cols-3 mt-20 pt-5 font-[bitter] bg-gradient-to-br from-slate-50
     via-gray-100 to-red-200 pl-10 pr-10 gap-6 pb-10">
      <div className="text-xl font-[merienda] text-red-800 italic col-span-3  pt-5 mx-auto text-center pl-10 pr-10">
        Blog
      </div>
      
        <div className="md:col-span-1 lg:col-span-2 grid sm:grid-cols-1 md:grid-cols-1 grid-cols-2  gap-6 ">
        {posts.map((post, id) => (
          <Card key={post.id} className="sm:w-full md:w-[350px] lg:w-[450px] h-90 mx-auto sombra4 mb-3">
            <CardHeader className="mx-auto justify-center ">
              <CardTitle className="pb-3 text-xl text-center text-red-800 h-20">{post.title}</CardTitle>
           
           
                <div className="object-cover mx-auto rounded-md h-[200px]">
                    <Image src={post.image} width={340} height={200} alt={post.title} className="rounded-md" />
                </div>
                </CardHeader>
                <CardContent className="">
                  <div className="mx-auto text-wrap justify-between text-sm h-[130px] pt-5 pl-5 pr-5">
                {post.description}
                <Link href={`/blog/${post.id}`} className="text-red-700 text-sm italic">Ver mas</Link>
                </div>
                
                    <div className=" flex flex-inline justify-between pb-5 pl-5 pr-5 ">
                        <div className="text-green-600 italic text-sm text-start justify-start ">{post.authorId}</div> 
                        <div className="italic text-sm text-red-800 text-end justify-end "> {post.datePubl.toDateString()}</div>

                    
                </div></CardContent>
          </Card>
        ))}
      </div>
      <div>
        <div className="pr-10 mt-10 h-screen sm:hidden md:block lg:block">
          <div className="h-98 mt-5 px-3 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg border-2
           border-red-900 pb-8 pl-5 pr-5">
            <ul className="flex flex-col gap-3 text-md">
              <div className="flex items-center p-2 text-red-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FaBlog />
                <p className="ms-3 text-red-900 text-center font-semibold text-xl">
                  Secciones Blog
                </p>
              </div>

              {posts.map((post, id) => {
                return (
                  <li key={post.id} className="text-red-900">
                    <a
                      href="/"
                      className="pb-3 text-gray-800 hover:text-red-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <p className="tracking-wide ms-3 whitespace-nowrap text-md text-red-900 text-wrap  ">
                        {post.title}
                      </p>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className="pt-3 "
          >
            <a
              href="/"
              className="flex items-center p-2 text-white rounded-lg
               dark:text-white bg-red-900 hover:text-red-800 hover:bg-gray-100
     dark:hover:bg-gray-700 hover:border-2 border-red-900 pl-5"
            >
             <IoMdChatboxes className=""/>
              Chat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
