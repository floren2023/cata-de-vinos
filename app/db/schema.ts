
import { pgEnum, pgTable,uniqueIndex,varchar,serial,timestamp } from "drizzle-orm/pg-core";

export const rolesEnum = pgEnum("roles", ["guest", "user", "admin"]);

export const userTable = pgTable(
  "users",
  {
    id: serial('id').primaryKey(),
    name: varchar('name',{length:256}).notNull(),    
    email:varchar('email',{length:256}).notNull(),
    password:varchar('password',{length:256}),
    // invitee: t.integer().references((): AnyPgColumn => users.id),
    createdAt:timestamp('createdAt').defaultNow(),
    role: rolesEnum().default("guest"),
  },
  (users) => {
    return {
      emailIndex: uniqueIndex("users_email_idx").on(users.email),
    };
  }
  
  
);

export const schema={
    user:userTable
};

