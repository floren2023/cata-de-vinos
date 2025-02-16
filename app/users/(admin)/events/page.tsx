"use server";

import { getEvents } from "@/app/actions/events-actions";
import { event } from "@/app/types/all-types";
import EventsForm from "./eventsForm";


export default async function Events() {
  type events =event[];

  const events = await getEvents();

  return (
    <div>
     
      <EventsForm events={events}/>
    </div>
  );
}
