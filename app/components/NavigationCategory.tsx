import React from 'react'
import { IoMdArrowDropdownCircle,IoMdMenu  } from "react-icons/io";
import { category } from '../types/all-types'
    

 interface CategoryProp{
    categories:category[]
 }


function NavigationCategory({categories}:{categories:CategoryProp}) {
  

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 rounded-md border-2 sticky w-3/4 mx-auto">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
     
      <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center
       p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden
        hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200
         dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
       aria-controls="navbar-dropdown" aria-expanded="false">
          <span className="sr-only">Abre menu principal</span>
          <IoMdMenu />
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
         <div className="text-red-800 italic text-xl merienda-h3 pl-5 pr-10"> Disfruta de nuestros mejores productos:</div>
          <li>
              <button id="dropdownNavbarLink1" data-dropdown-toggle="dropdownNavbar1" className="flex items-center 
              justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0
               md:hover:text-red-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-red-500 dark:focus:text-white
                dark:border-gray-700
               dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Vinos
                <IoMdArrowDropdownCircle height={6}/>
               </button>
              
              <div id="dropdownNavbar1" className="z-10 hidden font-normal
               bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400 mb-2" aria-labelledby="dropdownLargeButton1">

                    {
                        categories.map(
                          ({ id, name }) =>
                            name?.includes("Vino") == true && (
                              <li className=" text-sm tracking-wider pb-3 pl-5 pt-2 " key={id}>
                                <input
                                  type="checkbox"
                                  name={name}
                                  value="false"
                                  className="w-4 h-4 text-red-600 bg-gray-100 border-gray-500 rounded focus:ring-red-500
                           dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2
                            dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label className="capitalize">{name}</label>
                              </li>
                            )
                        )
                      }

                  
                   
                  </ul>
                 
              </div>
          </li>
         
          <li>
            <button id="dropdownNavbarLink2" data-dropdown-toggle="dropdownNavbar2" className="flex items-center 
            justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-red-500 dark:focus:text-white dark:border-gray-700
             dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Licores
             <IoMdArrowDropdownCircle height={6}/>
            </button>
            
            <div id="dropdownNavbar2" className="z-10 hidden font-normal
             bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton2">
                    {
                        categories.map(
                          ({ id, name }) =>
                            name?.toLowerCase().includes("Licor".toLowerCase()) === true && (
                              <li className=" text-sm tracking-wider pb-3  pl-5 pt-2" key={id}>
                                <input
                                  type="checkbox"
                                  name={name}
                                  value="false"
                                  className="w-4 h-4 text-red-600 bg-gray-100 border-gray-500 rounded focus:ring-red-500
                                 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2
                                  dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label className="capitalize">{name}</label>
                              </li>
                            )
                        )
                      }
                
                </ul>
                
            </div>
        </li>

        <li>
            <button id="dropdownNavbarLink3" data-dropdown-toggle="dropdownNavbar3" className="flex items-center 
            justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-red-500 dark:focus:text-white dark:border-gray-700
             dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Wiskey
             <IoMdArrowDropdownCircle height={6}/>
        </button>
            
            <div id="dropdownNavbar3" className="z-10 hidden font-normal
             bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton3">
                    {
                        categories.map(
                          ({ id, name }) =>
                            name?.toLowerCase().includes("Wiskey".toLowerCase()) == true && (
                              <li className=" text-sm tracking-wider pb-3 pl-5 pt-2" key={id}>
                                <input
                                  type="checkbox"
                                  name={name}
                                  value="false"
                                  className="w-4 h-4 text-red-600 bg-gray-100 border-gray-500 rounded focus:ring-red-500
                                 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2
                                  dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label className="capitalize">{name}</label>
                              </li>
                            )
                        )
                      }
                 
                </ul>
                
            </div>
        </li>

        <li>
            <button id="dropdownNavbarLink4" data-dropdown-toggle="dropdownNavbar4" className="flex items-center 
            justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0
             md:hover:text-red-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-red-500 dark:focus:text-white
              dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Cestas y Regalos
                <IoMdArrowDropdownCircle height={6}/></button>
        
            <div id="dropdownNavbar4" className="z-10 hidden font-normal
             bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton4">
                    {
                        categories.map(
                          ({ id, name }) =>
                            name?.includes("Cesta") === true && (
                              <li className=" text-sm tracking-wider  pb-3 pl-5 pt-2" key={id}>
                                <input
                                  type="checkbox"
                                  name={name}
                                  value="false"
                                  className="w-4 h-4 text-red-600 bg-gray-100 border-gray-500 rounded focus:ring-red-500
                                 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2
                                  dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label>{name}</label>
                              </li>
                            )
                        )
                      }
                  
                   
                </ul>
                
            </div>
        </li>

        </ul>
      </div>
    </div>
  </nav>
        
    )
}

export default NavigationCategory
