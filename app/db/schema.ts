
import { pgEnum, pgTable,uniqueIndex,varchar } from "drizzle-orm/pg-core";

export const rolesEnum = pgEnum("roles", ["guest", "user", "admin"]);

export const userTable = pgTable(
  "users",
  {
    id: varchar('id',{length:256}).primaryKey(),
    name: varchar('name',{length:256}),
   
    email:varchar('name',{length:256}),
    // invitee: t.integer().references((): AnyPgColumn => users.id),
    role: rolesEnum().default("guest"),
  },
  (table) => {
    return {
      emailIndex: uniqueIndex("users_email_idx").on(table.email),
    };
  }
  
  
);

export const schema={
    user:userTable
};