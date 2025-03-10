"use server";

import { addCategory } from "@/app/actions/category-actions";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().trim().min(1, { message: "Name field is required" }),
  
});

export async function sendCategory(prevState: any, formData: FormData) {
  const contactFormData = Object.fromEntries(formData);
  const validatedContactFormData = contactFormSchema.safeParse(contactFormData);


  if (!validatedContactFormData.success) {
    const formFieldErrors =
      validatedContactFormData.error.flatten().fieldErrors;

    return {
      errors: {
        name: formFieldErrors?.name,
       
      },
    };
  }

 
  await addCategory(validatedContactFormData.data.name)
  revalidatePath("/")
    return {
    success: "Your category was sent successfully!",
  };
}
