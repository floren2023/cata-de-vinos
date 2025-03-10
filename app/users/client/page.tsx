import SignOutButton from "@/app/testauth/sign-out-button";
import { auth } from "@/auth";
import Image from "next/image";

import Link from "next/link";

export default async function Client() {
  const session = await auth();
  if(!session){
    return <div>No estas autenticado</div>
  }
  return (
    <div className="mx-auto mt-20 pt-10 flex flex-inline gap-10">
      <div className=" pl-20 pt-10 pb-10 flex flex-inline gap-3 ">
       <pre>{JSON.stringify(session,null)}</pre>
        <p>Bienvenido {session.user.name}</p>
        {session.user.image && (
          <Image
            src={session.user.image}
            width={48}
            height={48}
            alt={session.user.name ?? "Avatar"}
            className="rounded-full "
          />
        )}
      </div>
      <div>
        <SignOutButton />
      </div>
    </div>
  );
}
