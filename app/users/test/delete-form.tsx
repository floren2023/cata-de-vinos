
"use client";
import { deleteCategoryForm } from "./deleteCategory";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";


const initialState = {
  message: "",
};

function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending} className="bg-red-800 text-white p-2 rounded-md">
      Delete
    </button>
  );
}

export function DeleteForm({ id, name }: { id: number;name: string }) {
  // useActionState is available with React 19 (Next.js App Router)
  const [state, formAction] = useActionState(deleteCategoryForm, initialState);

  return (
    <form action={formAction} >
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="name" value={name} />
      <DeleteButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}
    
   
