import {Poppins} from "next/font/google"
import {cn} from '@/lib/utils'

const font=Poppins({
    subsets:['latin'],
    weight:["600"]
})

interface HeaderProps{
    label:string
}
export const Header=({label}:HeaderProps)=>{
    return(
        <div className="flex flex-col gap-y-3  text-center">
             <div className="text-xl  text-red-800 text-center   font-[merienda] ">&#128273; Registrar</div >
  {/* <div className={cn("  text-xl  text-red-800 font-semibold  ",font.className)}>Login</div> */}
  <div className="text-gray-400 font-semibold">
    {label}
  </div>

</div>
    )
}