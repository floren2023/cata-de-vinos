import { category } from '@/app/types/all-types';
import React from 'react'

interface DeleteCategoryProps {
    handleDeleteCategory: (id:number)=>void;
  }

  interface Category{
    category:category[]
  }
function Table({categories}:Category) {
  
console.log(categories)
    return (
        <div className=" pl-20 mt-5">
      <div className="relative overflow-x-auto shadow-md sm:rounded-mb  justify-start mb-4 p-3">
      <table
        className="w-full text-md text-left rtl:text-right text-gray-700 dark:text-gray-400"
        id="my-table"
      >
        <thead className="text-xs text-gray-900 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id categoria
            </th>

            <th scope="col" className="px-6 py-3">
              Nombre categoria
            </th>

            <th scope="col" className="px-6 py-3" colSpan={2}>
              Acción de completar
            </th>
          </tr>
        </thead>
        <tbody>
           {categories.map((item) => item.id < 5 && (
                <tr
                  key={item.id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b
               dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.id}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.name}
                  </th>
                  <td className="px-6 py-4">
                    <button
                      
                      className="font-medium text-green-600
                   dark:text-red-500 hover:underline"
                    >
                      Editar
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={()=>handleDeleteCategory(item.id)}
                      className="font-medium text-red-600
                   dark:text-red-500 hover:underline"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              )
          )} 
        </tbody>
      </table>
      <nav
        className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
        aria-label="Table navigation"
      >
        <span
          className="text-sm font-normal text-gray-500
         dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto"
        >
        
          <span className="font-semibold text-red-900 dark:text-white">
            1 - 5 
          </span>
          of
          <span className="font-semibold text-red-900 dark:text-white">
           {categories.length} 
          </span>
        </span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500
                 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700
                  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700
                   dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center 
                px-3 h-8 leading-tight text-gray-500 bg-white border
                 border-gray-300 hover:bg-gray-100 hover:text-gray-700
                  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400
                   dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center
                 px-3 h-8 leading-tight text-gray-500 bg-white border
                  border-gray-300 hover:bg-gray-100 hover:text-gray-700
                   dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400
                    dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="flex items-center justify-center
                 px-3 h-8 text-red-600 border border-gray-300 bg-red-50 hover:bg-red-100
                  hover:text-red-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight
                 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100
                  hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700
                   dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight
                 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100
                  hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700
                   dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight
         text-gray-500 bg-white border border-gray-300 rounded-e-lg
          hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800
           dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
      </div>
    )
}

export default Table
