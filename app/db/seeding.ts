
import {db} from './drizzle'
import {  rolesEnum, userTable } from "./schema";

async function main() {
  
   await db
    .insert(userTable)
    .values({
      name: "John Miller",
      email:"floren@gmail.com",
      password:"floren1234**",
      createdAt:new Date(),
      role:'guest'
      
    })
    .returning(); 
    let users=await db.select().from(userTable)
    
}

main (
  
);
