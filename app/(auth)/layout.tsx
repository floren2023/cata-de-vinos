export default function AuthLayout({
    
    children,
}:{
    children:React.ReactNode;
}){
    
    
    return (
    <div className="flex flex-col mt-20 p-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
     from-white to-gray-300">
   
    <div>
    {children}</div>
    </div>
    )
}