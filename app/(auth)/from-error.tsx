import { FiAlertTriangle } from "react-icons/fi";
interface FormErrorProps{
    message:string
}
export const FormError=({message}:FormErrorProps)=>{
    if(!message){
        return null
    }
    else{
        return(
            <div className="bg-orange-500/15 p-3 rounded-md flex 
            items-center gap-x-2 text-sm text-orange-500">
                <FiAlertTriangle className="w-4 h-4"/>
                <p>{message}</p>
            </div>
        )
    }
}