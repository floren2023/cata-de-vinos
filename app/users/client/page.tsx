import { getEvents } from "@/app/actions/events-actions";
import Evento from "@/app/_components/Evento";
import React from "react";
import { auth } from "@/auth";
import Logout from "./Logout";
import { redirect } from "next/navigation";

export default async function Client() {
  const events = await getEvents();
  const session = await auth();
  const name = session.user.name ;
  if (session.user !== null) {
    return (
      <div className="mt-20 pl-10 pr-10">
        <nav className="bg-gray-100  text-center pt-4  flex flex-inline justify-between gap-10 pr-10 ">
          <div className="text-xl text-gray-400 italic pt-4 pb-4 pl-20">
            Bienvenido{" "}
            <span className="text-red-800 uppercase font-medium pl-3">
              {name}
            </span>
          </div>
          <div className="pt-5">
            <Logout />
          </div>
        </nav>
        <div className="flex flex-inline ">
          <div
            className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 
        pb-5 pt-5 gap-4 "
          >
            {events.map((item, id) => {
              return (
                <div key={item.id}>
                  <Evento
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    dateEv={item.dateEv}
                    hora={item.hora}
                    min={item.min}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  
  
}
