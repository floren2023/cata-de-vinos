import React from "react";
import { MdEmail } from "react-icons/md";
import {
  FaPhoneSquare,
  FaInstagramSquare,
  FaAddressCard,
} from "react-icons/fa";

import Link from "next/link";
import { RiTwitterXLine } from "react-icons/ri";

import { FaSquareFacebook, FaSquareWhatsapp } from "react-icons/fa6";

function Contacto() {
  return (
    <div className="fondo w-full h-full mt-30 pt-20">
      <div
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
    w-4/5 mx-auto sombra sm:gap-3 md:gap-2 lg:gap-0
     mt-2 pl-5 pr-10 pb-10"
      >
        <div className="sm:col-span-1 md:col-span-2 lg:col-span-3  ">
          <p className="text-2xl text-center font-medium italic text-red-900 pt-5  mb-6 font-[merienda]">
            Contáctanos
          </p>
        </div>

        <div className="sombra1 text-md italic text-red-900 tracking-tight bg-red-100 rounded-lg p-6 w-2/3 
        sm:col-span-1 md:col-span-1 lg:col-span-2 mx-auto justify-center">
          ¡Nos encantaría saber de ti! Ya sea que tengas una pregunta,
          comentario o simplemente quieras decir hola, no dudes en comunicarte a
          través de cualquiera de los métodos que encontrarás a continuación.
          <div className="text-md font-bold mt-3 text-center ">
            Mandanos un correo:
            <form className="max-w-md mx-auto">
              <div className="grid md:grid-cols-2 md:gap-3">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Nombre
                  </label>
                </div>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Correo
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <textarea
                  name="comment"
                  id="comment"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                  placeholder=" "
                ></textarea>
                <label
                  htmlFor="comment"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Mensaje
                </label>
              </div>

              <button
                type="submit"
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none
                 focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center
                  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Mandar
              </button>
            </form>
          </div>
        </div>
        <div className="block">
          <div className="p-6 px-2 py-2 pl-7 pr-5  rounded-lg bg-gray-100 pb-4 mx-auto sombra1 mb-5 leading-10">
            <p className="text-md font-bold pb-3">
              {" "}
              Ponte en contacto con nosotros
            </p>
            <div className="flex items-center flex-inline gap-2 content-center">
              <MdEmail name="email" title="email" />
              Correo : [tunombre@tudominio.com]
            </div>
            <div className="flex items-center flex-inline gap-2 content-center">
              <FaPhoneSquare name="phone" title="telefono" /> Teléfono: 034 999
              999 999
            </div>
            <div className="flex items-center flex-inline gap-2 content-center">
              <FaAddressCard name="address" title="direccion" /> Dirección: 123
              Calle , Ciudad, País
            </div>

            <div className="flex flex-inline gap-5 mt-4 text-gray-700 items-center content-center text-start">
              Redes
              <RiTwitterXLine name="x" title="x twitter" />
              <FaSquareFacebook name="facebook-color" title="facebook" />
              <FaInstagramSquare name="instagram" title="instagram" />
              <FaSquareWhatsapp name="whatsapp-color" title="whatsapp" />
            </div>
            <div className="font-bold text-red-900 pt-3 justify-center hover:text-red-500 text-center">
              <Link href="">Mapa del sitio</Link>
            </div>
          </div>

          <div className="p-6 px-2 py-2 pl-7 pr-5  rounded-lg bg-gray-100 pb-4 mx-auto sombra1 leading-10">
            <p className="font-bold">Horario comercial:</p>
            <p>Martes - Sabado 12.00-22.00</p>
            <p>Domingo y Lunes cerrado</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
