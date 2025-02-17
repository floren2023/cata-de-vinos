
import { getEvents, getFilteredEvents } from "../actions/events-actions";
import HeaderEventos from "../components/HeaderEventos";
import { NavigationEvent } from "../components/navigationEvent";
import Eventos from "./eventos";

export  default async function Events(
  { searchParams 
  }: { 
    searchParams: { 
      search: string, 
       
    } 
  }
  ){ 
    const search=typeof searchParams.search==='string'?searchParams.search:undefined   
    

    let events=await getEvents()

     if(search!=''&&search!=undefined){
         const filteredEvents=await getFilteredEvents({query:search})
         
          events= filteredEvents
         }
    return(
        <>
        
        <HeaderEventos/>
        <div className="bg-gradient-to-b from-slate-100 via-red-100 to-gray-200">
        <NavigationEvent events={events}/>
    
       <Eventos events={events}/>
       </div>
        </>
    )
    
}