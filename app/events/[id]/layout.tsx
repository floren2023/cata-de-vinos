export default function EventLayout({
    children,
}:{
    children:React.ReactNode;
}){
    return <div>{children}
    <div className="mt-20 mx-auto text-xl text-red-800 text-center font-[merienda] pt-10">Ver evento:</div>
    </div>
}
