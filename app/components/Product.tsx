import { FaHeart,FaRegHeart } from "react-icons/fa";

export default function Product({product}){
return(
    <div className="  w-full  flex flex-col  sm:mx-auto pb-5 ">

    <div className="grid grid-cols-1 bg-gray-100 gap-2 mb-4 rounded-lg shadow-md border-red-200  border-2  dark:bg-gray-800 dark:border-gray-700">
    
      <div className=" text-start pl-3 pt-2 flex flex-inline justify-between">
        <div>
            <FaHeart className="w-9 h-8 pl-0 text-red-600" /></div>
        <div className="flex w-full pr-5 text-md pt-2  justify-end">
          <div
            className="text-end  space-x-1  text-xl text-yellow-400"
          >          
             {fav}
                  <span
            className="bg-red-100 text-red-800 text-sm font-semibold px-2.5 py-0.5 rounded dark:bg-red-200
             dark:text-red-800 ms-3"
            >5.0</span>
        </div>
        </div>
    
      </div>
        <div className="">
          <img className="foto-div " src={image} alt={`"product-"${image}`} />
        </div>
    
        <div className="text-md font-semibold text-gray-900 dark:text-white mb-2 text-end justify-end pr-10 ">
          <span className="text-red-800 mr-2">€</span>{precio}
        </div>
    <div className="flex flex-inline pb-4">
      <div className="justify-center mx-auto  ">
        <div
          className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center pb-3 pl-0 ml-0"
        >
          {titulo}
        </div>
    
        <div
          className="text-md tracking-tight text-red-900 dark:text-white pb-3 pl-5 pr-5 text-wrap"
        >
          {descripcion}
        </div>
    
        
      </div>
      <div  className= "sombra bg-gray-200 rounded-lg shadow-md w-1/4 hover:bg-red-800 
       hover:text-gray-100 text-xl font-medium
      text-red-800 border-b-1  text-center  items-center mt-5  ml-2 mr-4 pt-4 m-0 merienda-h3">
     <a href="">VER</a>
    
    </div>
    </div>
        
        </div>

)

}

  
  
  
 
