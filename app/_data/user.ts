import { db } from "../db/drizzle";
import { userTable, rolesEnum } from "../db/schema";
import { eq } from "drizzle-orm";

import "server-only";

import { decrypt, verifySession } from "@/app/_lib/session";
import { cache } from "react";

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    const data = await db.select()
    .from(userTable).where(eq(userTable.id,session.userId));

    const user = data[0];

    return user;
  } catch (error) {
    console.log("Failed to fetch user");
    return null;
  }
});
