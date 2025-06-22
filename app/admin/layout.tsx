

import SideNavAdmin from "./sideNavAdmin";



export default function AdminLayout({
    
    children,
}:{
    children:React.ReactNode;
}){
    
    
    return (
    <div className="flex flex-col mx-auto ml-10 mr-10">
        <nav className="bg-gray-200 text-red-800 text-center text-2xl pt-5 pb-5">
        Aqui esta la navegacion de admin
       </nav>
<div className="flex flex-inline ">
<SideNavAdmin />
    {children}
  
  
    </div>
    </div>
    )
}