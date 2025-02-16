"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const data = [
    {
      image: "https://da5w64qce4n0sawk.public.blob.vercel-storage.com/carousel/carousel1-1aNjTChaQE9XDrbRY0PEyLm4nIrjox.jpg",
      title: "Vinos para festividades",
    },
    { image: "https://da5w64qce4n0sawk.public.blob.vercel-storage.com/carousel/carousel2-adb6M7m3qQxtUUmkyoh5bvrGm7aWEG.jpg", title: "Catas excepcionales" },
    { image: "https://da5w64qce4n0sawk.public.blob.vercel-storage.com/carousel/carousel3-g2io5IHvWxogPW65xRFHWwUPRYya40.jpg", title: "Catas en casa" },
    { image: "https://da5w64qce4n0sawk.public.blob.vercel-storage.com/carousel/carousel4-PhWf3J1UhIorJ6zP7cQrjQIqPuKi1w.jpg", title: "Maridajes" },
    
    { image: "https://da5w64qce4n0sawk.public.blob.vercel-storage.com/carousel/carousel5-6wfBM7mjVTZgvp5XwmOMTynTq2c0LK.jpg", title: "Marcas reconocidas internas e internacionales" },
  ];

export default function CarouselHeader(){
    return(
        
        <Carousel 
        interval={3000}
        autoPlay={true}
        infiniteLoop={true}
        thumbWidth={500}
        >
            {data.map((item,id)=>{
                return(
                    <div key={id} className='h-[400px]'>
                         <div  className='rounded-b-md'> 
                     <p className="bg-gray-200 rounded-t-md pt-6 pb-3 opacity-75 text-xl text-red-800 uppercase ">{item.title}</p>
                                 
                    
                <img src={item.image} alt={item.title} className='rounded-b-md '/>
                
                
            </div>
           
            </div>
                )
            })}
        
        
    </Carousel>
    
    )

}