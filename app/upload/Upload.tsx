
import { put } from '@vercel/blob';
import { revalidatePath } from 'next/cache';
 
type FormData={
    image:File
}
export async function Upload() {
    "use server"
  async function uploadImage(formData: FormData) {
    
    const imageFile = formData.image
    const blob = await put(imageFile.name, imageFile, {
      access: 'public',
    });
    revalidatePath('/');
    return blob;
  }
 
  return (
    <form onSubmit={()=>uploadImage}>
      <label htmlFor="image">Image</label>
      <input type="file" id="image" name="image" required />
      <button>Upload</button>
    </form>
  );
}