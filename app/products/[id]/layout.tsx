export default function ProductLayout({
    children,
}:{
    children:React.ReactNode;
}){
    return <div>
    <div className="mt-20 mx-auto text-xl text-red-800 text-center font-[merienda] pt-10">Ver producto:</div>
    {children}
    </div>
}
