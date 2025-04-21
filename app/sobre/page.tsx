"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../_components/card";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Sobre() {
  return (
    <div className="bg-gradient-to-b from-slate-100 via-red-100 to-gray-200 mt-20 pl-10 pr-10 pb-10 pt-5">
     
      {/* <Image src="/images/sobre3.jpg"  height={200} alt="header" className="object-cover h-40" width={1280}/> */}

      <div className=" grid sm:grid-cols-1 lg:grid-cols-2  rounded-md text-center  ">
        <div
          className="  font2  text-center  text-xl text-wrap 
    text-md text-gray-700  overflow-scroll
       pr-10 pl-10"
        > 
         <div className="font-[merienda] text-xl  bg-gradient-to-r from-slate-700 via-neutral-700 to-red-700 inline-block mx-auto 
        text-transparent text-center bg-clip-text justify-center pt-6 pb-4 bg-gray-100  ">
          VEN A CONOCER NUESTRA TIENDA
        </div>
          <div className="text-red-800 text-xl italic pt-20 pb-10 justify-center text-center font-semibold ">
            Apasionados por descubrir el mejor vino...
          </div>
          <div className="pl-20 pr-10 font-medium text-md">
            Somos una familia que pensamos en ofrecer felicidad a otras familias
            con los productos y regalos que nuestra empresa tiene
            <p>Somos una tienda en Castellon....</p>
          </div>
        </div>

        <div className="rounded-md pt-6 pb-6 justify-center mx-auto">
          <Image
            src="/images/tienda1.jpg"
            alt="tienda"
            width={500}
            height={400}
            className="rounded-md"
          />
        </div>
      </div>
      <div className="pr-10 pl-10 pt-6 pb-6  ">
        <div
          className="text-center mx-auto tracking-wide text-gray-500 justify-center
  text-sm font-[merienda] pt-5 pb-5"
        >
          {" "}
          GALERIA DE FOTOS DE EVENTOS PASADOS
        </div>
        <div className="w-full pl-20 pr-20">
          <Carousel
            responsive={responsive}
            itemClass="carousel-item-padding-20-px"
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
          >
            <div className="pl-2">
              <Card
                image="/images/events/cata1.jpg"
                titulo="Cata de verano 2023"
                subtitulo="evento especial"
              />
            </div>
            <div className="pl-2">
              <Card
                image="/images/events/cata1.jpg"
                titulo="Cata de verano 2023"
                subtitulo="evento especial"
              />
            </div>
            <div className="pl-2">
              <Card
                image="/images/events/cata1.jpg"
                titulo="Cata de verano 2023"
                subtitulo="evento especial"
              />
            </div>
            <div className="pl-2">
              <Card
                image="/images/events/cata1.jpg"
                titulo="Cata de verano 2023"
                subtitulo="evento especial"
              />
            </div>
            <div className="pl-2">
              <Card
                image="/images/events/cata1.jpg"
                titulo="Cata de verano 2023"
                subtitulo="evento especial"
              />
            </div>
            <div className="pl-2">
              <Card
                image="/images/events/cata1.jpg"
                titulo="Cata de verano 2023"
                subtitulo="evento especial"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
