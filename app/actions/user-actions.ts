"use server";
import { revalidatePath } from "next/cache";
import { db } from "../db/drizzle";
import { userTable, rolesEnum, lower } from "../db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { LoginSchema, RegisterSchema } from "../schemas";
import { z } from "zod";
import { signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";



type User = {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  role: typeof rolesEnum;
};


export const logout=async()=>{
  await signOut()
  
  
}

export const signInWithCredentials = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos invalidos!" };
  }
  else{
    try {
    const response=await signIn("credentials",{
    email:validatedFields.data.email,
    password:validatedFields.data.password,
    redirect:false
 })
    console.log(response)

      return { success: "Formulario mandado con exito!" };

    } catch(error){
      return {error:"Credenciales no validos"}
        
    }
  }
 
};



export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
if (validatedFields.data.password!==validatedFields.data.passwordVerify){
  return { error: "Contraseña no coincide!" };
}
  if (!validatedFields.success) {
    return { error: "Campos invalidos!" };
  } else {
    const { name, email, password } = validatedFields.data;

    // const message=await addUser({name,email,password})
    const hashedPassword = await bcrypt.hashSync(password, 10);

    //if exists an user with the same email
    const existingUser = await getUserByEmail(email)

    if (existingUser[0]) {
      return { error: "Email existe!" };
    } else {
      let newUser: User = {
        name: name,
        email: email,
        password: hashedPassword,
        createdAt: new Date(),
        role: rolesEnum["guest"],
      };

      const data = await db
        .insert(userTable)
        .values(newUser)
        .returning({ id: userTable.id });
      const user = data[0];

      if (!user) {
        return {
          error: "El usuario no se ha creado",
        };
      } else {
        //send verification token email
        return { success: "Usuario creado!" };
      }
    }
  }
};

export const getUsers = async () => {
  const data = await db.select().from(userTable);
  return data;
};

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db
      .select()
      .from(userTable)
      .where(eq(lower(userTable.email), email.toLocaleLowerCase()));
    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db
      .select()
      .from(userTable)
      .where(eq(userTable.id, id));
    return user;
  } catch {
    return null;
  }
};

export const addUser = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  const hashedPassword = await bcrypt.hashSync(password, 10);

  //if exists an user with the same email
  const existingUser = await db
    .select()
    .from(userTable)
    .where(eq(userTable.email, email));
  if (existingUser) {
    return { message: "Email existe!" };
  }
  let newUser: User = {
    name: name,
    email: email,
    password: hashedPassword,
    createdAt: new Date(),
    role: rolesEnum["guest"],
  };

  const data = await db
    .insert(userTable)
    .values(newUser)
    .returning({ id: userTable.id });
  const user = data[0];

  if (!user) {
    return {
      message: "An error occurred while creating your account.",
    };

    // TODO:
    // 4. Create user session
    // 5. Redirect user
    // revalidatePath('/client')
  }
};

export const deleteUser = async (id: string) => {
  await db.delete(userTable).where(eq(userTable.id, id));

  revalidatePath("/");
};
