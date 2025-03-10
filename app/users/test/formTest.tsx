
"use client"
import {  useFormStatus } from "react-dom";
import { sendCategory } from "./sendCategory";
import { RiLoader5Fill } from "react-icons/ri";
import { useActionState } from "react";


const initialState = {
    success: "",
    errors: {
      name: "",     
     
    }
  };



export function AddForm(){
    
    const [state, formAction] = useActionState(sendCategory, initialState);
    return(
        <div>
        <form action={formAction}>
            <div className="w-full flex flex-col gap-2">
            <label htmlFor="name">Enter Category</label>
            <input type="text" id="name" name="name" className="rounded-md" />
            <SubmitButton />                
            
            {state.errors?.name && (
              <p className="text-red-500">{state.errors.name}</p>
            )}
            </div>

        </form>
        <p> {state?.succes}</p>
</div>
    )
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending ? true : false}
      className="p-4 rounded-md bg-red-800 text-white w-1/4 ">
    
      {pending ? (
        <span>
          Submitting <RiLoader5Fill className="animate-spin" />
        </span>
      ) : (
        "Submit"
      )}
    </button>
  );
}

