"use client"
import Image from "next/image"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from "../components/card";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function(){
    return(
    
        <div className="bg-gradient-to-b from-red-200 to-gray-100 mt-20 text-md ml-10 mr-10 pb-10">
   
   
    <div className="font-[merienda] text-md text-red-800 pl-40 mt-20 pt-10">VEN A CONOCER NUESTRA TIENDA</div>
    {/* <Image src="/images/sobre3.jpg"  height={200} alt="header" className="object-cover h-40" width={1280}/> */}
  
  
    
 
 <div className=" grid sm:grid-cols-1 lg:grid-cols-2  rounded-md text-center  ">
 
  <div className="  font2 font-semibold text-center  text-xl text-wrap 
    text-md text-gray-700  overflow-scroll
       pr-10 pl-10">
      <div className="text-red-800 text-xl italic pt-20 pb-10 justify-center text-center ">
        Apasionados por descubrir el mejor vino...
       </div>
       <div className="pl-20 pr-10">
   Somos una familia que pensamos en 
    ofrecer felicidad a otras familias con los productos y regalos que nuestra empresa tiene
<p>Somos una tienda en Castellon....</p> 
</div>
 </div>

<div  className="rounded-lg pt-6 pb-6 justify-center mx-auto">
  <Image src="/images/tienda1.jpg" alt="tienda" width={500} height={400} />
</div>
      </div>
<div className="pr-10 pl-10 pt-6 pb-6  ">
 <div className="text-center mx-auto tracking-wide text-gray-500 justify-center
  text-sm font-[merienda] pt-5 pb-5"> GALERIA DE FOTOS DE EVENTOS PASADOS</div> 
  <div className="w-full pl-20 pr-20">
 <Carousel responsive={responsive} itemClass="carousel-item-padding-20-px" infinite={true}
  autoPlay={true}
  autoPlaySpeed={3000}
  keyBoardControl={true}>
  <div className="pl-2">
 <Card
        image="/images/events/cata1.jpg"
        titulo="Cata de verano 2023"
        subtitulo="evento especial" />
    </div>
    <div className="pl-2">
 <Card
        image="/images/events/cata1.jpg"
        titulo="Cata de verano 2023"
        subtitulo="evento especial" />
    </div>
    <div className="pl-2">
 <Card
        image="/images/events/cata1.jpg"
        titulo="Cata de verano 2023"
        subtitulo="evento especial" />
    </div>
    <div className="pl-2">
 <Card
        image="/images/events/cata1.jpg"
        titulo="Cata de verano 2023"
        subtitulo="evento especial" />
    </div>
    <div className="pl-2">
 <Card
        image="/images/events/cata1.jpg"
        titulo="Cata de verano 2023"
        subtitulo="evento especial" />
    </div>
    <div className="pl-2">
 <Card 
        image="/images/events/cata1.jpg"
        titulo="Cata de verano 2023"
        subtitulo="evento especial" />
    </div>
</Carousel>
</div>
</div>

</div>


    )
}

    
    
