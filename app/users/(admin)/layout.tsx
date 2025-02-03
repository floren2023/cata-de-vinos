

import SideNavAdmin from "./sideNavAdmin";



export default function AdminLayout({
    
    children,
}:{
    children:React.ReactNode;
}){
    
    
    return <div className="flex flex-inline">
    <SideNavAdmin />
    {children}
    </div>
}