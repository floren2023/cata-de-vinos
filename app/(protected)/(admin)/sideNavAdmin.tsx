


import { MdDashboard,MdCategory,MdEmojiEvents, MdFavorite } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { FaBlog, FaCalendarCheck, FaComment, FaProductHunt } from "react-icons/fa";


export default function SideNavAdmin  () {    
      
    return (
        <div  className=" z-40 w-[256px] h-screen pt-20  transition-transform -translate-x-full
 bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
    <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
       <ul className="space-y-2 font-medium">
          <li>
             <a  href="/users/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white
              hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <MdDashboard className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                <span className="ms-3">Dashboard</span>
             </a>
          </li>
          
          
          <li>
             <a href="/users/users" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <FaUsers className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                <span className="flex-1 ms-3 whitespace-nowrap">Usuarios</span>
             </a>
          </li>
          <li>
             <a href="/users/categories" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <MdCategory className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                <span className="flex-1 ms-3 whitespace-nowrap">Categorias</span>
             </a>
          </li>
          <li>
             <a href="/users/products" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <FaProductHunt className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                <span className="flex-1 ms-3 whitespace-nowrap">Productos</span>
             </a>
          </li>
          <li>
             <a href="/users/events" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <MdEmojiEvents className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                <span className="flex-1 ms-3 whitespace-nowrap">Eventos</span>
             </a>
          </li>
          <li>
            <a href="/users/blog" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <FaBlog className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
               <span className="flex-1 ms-3 whitespace-nowrap">Blog</span>
            </a>
         </li>
          <li>
            <a href="/users/favorites" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
   
            <MdFavorite className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                <span className="flex-1 ms-3 whitespace-nowrap">Favorites</span>
             </a>
          </li>
          <li>
             <a href="/users/forum" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <FaComment className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                <span className="flex-1 ms-3 whitespace-nowrap">Forum</span>
             </a>
          </li>
          <li>
             <a href="/users/reservas" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <FaCalendarCheck className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                <span className="flex-1 ms-3 whitespace-nowrap">Reservas</span>
             </a>
          </li>
       </ul>
    </div>
 </div>
    )
}
