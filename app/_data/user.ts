import { db } from "../db/drizzle";
import { userTable, rolesEnum, sessionTable } from "../db/schema";
import { eq } from "drizzle-orm";

import "server-only";

import { decrypt,verifySession } from "@/app/_lib/session";

import { cache } from "react";
import { taintUniqueValue } from "next/dist/server/app-render/rsc/taint";

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    const data = await db.select({name:userTable.name,email:userTable.email})
    .from(userTable).where(eq(userTable.id,sessionTable.userId));

    const user = data[0];
    const filteredUser=userDTO(user)
    return filteredUser;

  } catch (error) {
    console.log("Failed to fetch user");
    return null;
  }
});

function userDTO (user){
  taintUniqueValue(
    'Do not pass a user session token to the client',
    user,
    user.sessionToken

  )
  return{
    name:user.name,
    email:user.email,
    session:user.session,
    auditTrail:canViewAudit(user.auditTrail,user.role)
  }
}

function canViewAudit(auditTrail: any, role: any) {
  return role==='admin'?auditTrail:null
}
