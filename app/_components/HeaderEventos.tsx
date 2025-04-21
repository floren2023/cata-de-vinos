import React from 'react'
import './style.css'


function HeaderEventos() {
    
    return (
        <div
        className="w-full text-white content-center justify-center mt-20 pt-10  z-10 wrap-principal "
      >
        <div
          className="bg-red-800 justify-center text-center p-4 opacity-70 rounded-lg mx-auto  merienda-h3"
        >
          <p
            className="lg:text-2xl font-medium sm:text-xl md:text-xl justify-center text-center
      items-center mb-3 tracking-wider italic"
          >
            Descubre el arte del vino:
          </p>
          <p
            className="lg:text-xl font-medium sm:text-xl md:text-xl justify-center text-center
      items-center mb-2 italic"
          >
            Catas únicas para todos los sentidos.
          </p>
        </div>
      </div>  
    )
}

export default HeaderEventos
