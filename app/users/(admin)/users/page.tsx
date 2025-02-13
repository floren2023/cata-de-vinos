import { getEvents } from '@/app/actions/events-actions'
import Evento from '@/app/components/Evento'
import React from 'react'


async function Users() {
   const events=await getEvents()

    return (
        <>
        <h2>Bienvenido "name"</h2>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
        pl-10 pr-10 pb-10 pt-10 gap-4 bg-gradient-to-b from-slate-100 via-red-100 to-gray-200 ">
  
  {events.map((item,id)=>{
    return(
        <div key={item.id}>  
      <Evento image={item.image} title={item.title}
      description={item.description} dateEv={item.dateEv}  /></div>
    )}
  )}
   
</div>
</>
    )
}

export default Users
