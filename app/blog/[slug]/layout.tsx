
export default function BlogLayout({
    children,
}:{
    children:React.ReactNode;
}){
    return <div className="ml-20 mr-20   ">
   
   <div className="mt-20 pl-20 pr-20 lg:prose-lg mx-auto bg-gradient-to-b from-slate-100 via-red-100 to-gray-200  p-10">
    {children}
    </div>
    </div>
}