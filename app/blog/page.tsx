import React from "react";
import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";
import { FaBlog } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default async function Blog() {
  const filenames = await fs.readdir(
    path.join(process.cwd(), "app/blog/content")
  );
  const blogs = await Promise.all(
    filenames.map(async (filename) => {
      const content = await fs.readFile(
        path.join(process.cwd(), "app/blog/content", filename),
        "utf-8"
      );
      const data = await compileMDX<{
        titulo: string;
        description: string;
        img: string;
        autor: string;
        fecha: string;
        setOrder: number;
      }>({
        source: content,
        options: {
          parseFrontmatter: true,
        },
      });
      return {
        filename,
        slug: filename.replace(".mdx", ""),
        ...data.frontmatter,
      };
    })
  );

  return (
    <div
      className="grid sm:grid-cols-1  md:grid-cols-2 grid-cols-3 gap-4 mt-20 pt-5 font-[bitter] bg-gradient-to-br from-slate-50
     via-gray-100 to-red-200 pl-10 pr-10  pb-10"
    >
      <div className="text-xl font-[merienda] text-red-800 italic col-span-3 mb-5  pt-5 mx-auto text-center pl-10 pr-10">
        Blog
      </div>

      <div className="sm:col-span-1 md:col-span-1 lg:col-span-2">
        <div
          className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 sm:p-0 md:p-0 lg:pr-6 lg:pl-6 
          sm:w-full md:w-full  "
        >
          {blogs.map((blog, index) => (
            <Card
              key={index}
              className="sm:w-full md:w-[27rem] lg:w-[27rem]  mx-auto sombra4 mb-3 bg-white"
            >
              <CardHeader className="mx-auto justify-center ">
                <CardTitle className=" text-xl text-center text-red-800 h-20 pt-2">
                  {blog.titulo}
                </CardTitle>

                <div className="mx-auto rounded-md h-30 w-[24rem]">
                  <Image
                    src={blog.img}
                    width="0"
                    height="0"
                    sizes="100vw"
                    alt={blog.titulo}
                    className="rounded-md w-full h-30 object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="">
                <div className="mx-auto text-wrap  text-md h-[140px]  pl-3 pr-3 justify-between">
                  {blog.description}
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="text-red-700 text-sm italic pl-3"
                  >
                    Ver mas
                  </Link>
                </div>

                <div className=" flex flex-inline justify-between pb-5 pl-5 pr-5 ">
                  <div className="text-green-600 italic text-sm text-start justify-start ">
                    {blog.autor}
                  </div>
                  <div className="italic text-sm text-red-800 text-end justify-end ">
                    {" "}
                    {blog.fecha}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="pr-10 pt-5 h-screen sm:hidden md:w-[20rem] lg:w-[22rem] md:flex lg:flex flex-col">
        <div
          className="h-98  px-3 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg border-2
           border-red-900 pb-8 pl-5 pr-5 text-wrap"
        >
          <div
            className="flex items-center p-2 text-red-900 rounded-lg dark:text-white
               hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <FaBlog />
            <p className="ms-3 text-red-900 text-center font-semibold text-xl">
              Secciones Blog
            </p>
          </div>
          <ul className="flex flex-col gap-3 text-md">
            {blogs.map((blog, setOrder) => {
              return (
                <li key={blog.setOrder} className="text-red-900">
                  <a
                    href={`/blog/${blog.slug}`}
                    className="pb-3 text-gray-800 hover:text-red-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <p className="tracking-wide ms-3 whitespace-nowrap text-md text-red-900 text-wrap  ">
                      {blog.titulo}
                    </p>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pt-3 ">
          <a
            href="/"
            className="flex items-center p-2 text-white rounded-lg
               dark:text-white bg-red-900 hover:text-red-800 hover:bg-gray-100
     dark:hover:bg-gray-700 hover:border-2 border-red-900 pl-5"
          >
            <IoMdChatboxes className="" />
            Chat
          </a>
        </div>
      </div>
    </div>
  );
}
