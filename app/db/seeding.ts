
import {db} from './drizzle'
import { categoryTable, userTable } from "./schema";

async function main() {
  
  const category= await db
    .insert(categoryTable)
    .values({
      name: "Vino tinto",
      
    })
    .returning(); 
    const categories=await db.select().from(categoryTable)
    console.log(categories)
}

main (
  
);
