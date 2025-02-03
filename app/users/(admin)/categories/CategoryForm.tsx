"use client"
import React from 'react'
import { handleAddCategory } from './handle'
import { useForm } from "react-hook-form'




  
  

export default  function CategoryForm() {
   
    const catForm = () => {
        const {
          register,
          watch,
          handleSubmit:handleAddCategory,
          formState: { errors },
        } = useForm();

    return (
        <div
        className="w-2/3 mx-auto  content-center itemes-center justify-center boder-2 border-gray-500
  bg-gradient-to-b from-gray-200 via-stone-100 to-red-100 shadow-md shadow-gray-300 rounded-md mt-10 
  ml-20 p-5"
      >
        <div className="text-red-800 text-xl  pb-3 text-start">
          Crear Categoria
        </div>
        <form method="post" id="catForm" name="catForm" className="" onSubmit={handleAddCategory}>
          <div className="flex flex-col gap-5    ">
            <div className="  justify-center flex flex-inline gap-5 ">
              <div className="w-full  ">
                <label
                  className=" mb-2 tracking-wide text-gray-500  text-sm  "
                  htmlFor="name"
                >
                  Nombre categoria
                </label>
                <input
               
                  {...register("name", { required: true })}
                  
                  className="appearance-none block w-full 
  text-gray-700 border border-gray-500 rounded
  leading-tight focus:outline-none focus:bg-white"
                  id="name"
                  type="text"
                  placeholder="Nombre bebida ej. coñac"
                  />
              </div>
            </div>
  
            <div className="text-end justify-items-end ">
              <button
               type="submit"
                className="bg-red-800 hover:bg-transparent hover:text-red-800 hover:ring-red-900
      active:ring-red-900 focus:ring-red-900
  text-white font-semibold  py-2 px-2 border
  border-red-900 rounded-md"
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    )
}
}


