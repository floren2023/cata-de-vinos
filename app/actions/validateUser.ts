import { SignupFormSchema, FormState } from "@/app/_lib/definitions";
import { addUser } from "./user-actions"

export async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };

  }else{
    const name=validatedFields.data.name
    const email=validatedFields.data.email
    const password=validatedFields.data.password
  await addUser({name,email,password})
}}
