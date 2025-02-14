import Link from "next/link";
import CarouselHeader from "./carousel-header";

export default function Header() {
  return (
    <>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-5 mt-10 pl-10 pr-10 ">
        <div className="pt-10 flex flex-col gap-5">
          <div
            className="bg-gray-100 justify-center text-red-900 text-2xl   tracking-wider 
    pt-20 text-center font-[merienda]"
          >
            ¡Bienvenidos a <span className="text-red-600  ">Cata de vinos!</span>
            
          </div>
          <div className="text-md  text-red-900    tracking-wide  justify-center text-center">
            CATAS A LA CARTA Y MARIDAJES
            <p>Somos expecialistas en servicios de degustación</p>
          </div>
          <div className="text-xl  pt-5 text-red-700 tracking-wide justify-center text-center pl-10 font-[merienda] ">
            Degustación de vinos de colección e internacionales
          </div>
          <div className="mx-auto z-10 text-center justify-center mt-10">
            <Link
              href="/events"
              className="rounded-md hover:bg-gray-100 hover:text-red-900  text-white border-2 cursor-pointer  
                 border-red-900 shadow-md bg-red-800 text-xl semibold pt-4  pl-6 pr-6 pb-4
                 transition-ease-out hover:scale-110  uppercase tracking-wider font-[merienda]"
            >
              Reservar evento aqui
            </Link>
          </div>
        </div>

        <div className="pt-5 items-center  ">
          <CarouselHeader />
        </div>
      </div>

      <div className="flex flex-col  ">
        <div className="pl-20 text-gray-600 font-[merienda] text-md tracking-wider pb-4 ">
          Nuestros socios
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center  pb-8 pl-10 pr-10 mx-auto">
          <div className="justify-center content-center items-center mx-auto">
            <img
              src="/logos/freixenet.png"
              alt="logo freixenet"
              className="h-20  "
            />
          </div>
          <div className="justify-center content-center items-center  mx-auto">
            <img
              src="/logos/bordeaux.png"
              alt="logo bordeaux"
              className="h-20 "
            />
          </div>
          <div className="justify-center content-center items-center  mx-auto">
            <img src="/logos/rioja.jpg" alt="logo rioja" className="h-20  " />
          </div>
          <div className="justify-center content-center items-center  mx-auto">
            <img
              src="/logos/gaieter.png"
              alt="logo gaieter"
              className="h-20  "
            />
          </div>
        </div>
      </div>
    </>
  );
}
