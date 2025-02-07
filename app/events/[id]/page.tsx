"use server"
import { getEvent } from '@/app/actions/events-actions'

export default async function Event({params}:{params:{id:number}}){
    const {id} =params;
  const Event=await getEvent(id)

if(Event){
    const item=Event[0]
    return <div>Event  {item.id}</div>
}
    else 
    return <div>Evento no encontrado</div>
}