import { drizzle } from "drizzle-orm/node-postgres";
import {db} from './drizzle'
import { userTable } from "./schema";

async function main() {
  
  await db
    .insert(userTable)
    .values({
      name: "John Doe",
      email: "John@mail.com",
      password: "123456",
      role: "guest",
    })
    .returning();
}

main();
