import { deleteCategory } from "@/app/actions/category-actions";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function deleteCategoryForm(
   prevState: {
     message: string;
   },
   formData: FormData,
 ) {
   console.log(formData)
   const schema = z.object({
     id: z.string().min(1),
     name: z.string().min(2),
   });
   const data = schema.parse({
     id: formData.get("id"),
     name: formData.get("name"),
   });
 
   try {
     await deleteCategory(parseInt(data.id))
     revalidatePath("/");
     return { message: `Deleted category${data.name}` };
   } catch (e) {
     return { message: "Failed to delete category" };
   }
 }