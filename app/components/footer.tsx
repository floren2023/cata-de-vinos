import Link from "next/link";
import SocialMedia from "./socialmedia";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-600 shadow-md shadow-gray-500  border-t-2 border-gray-200">
      <div className="mx-auto w-full justify-center content-center items-center max-w-7xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-600 uppercase dark:text-white">
              Empresa
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Dirección
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Telefono
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Correo
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li className="mb-4 text-red-800 ">
                <p className="font-bold pb-3">Horario comercial:</p>
                <p className="pb-3 pl-3">Martes - Sabado 12.00-22.00</p>
                <p className="pb-1 pl-3">Domingo y Lunes cerrado</p>
              </li>
              <li className="mb-4 text-red-800">
                <Link href="\contact" className="hover:underline underline">
                  Contactanos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-600 uppercase dark:text-white">
              Navegación
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Sobre nosotros
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Eventos
                </Link>
              </li>

              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Productos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-600 uppercase dark:text-white">
              Información Legal
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Términos y condiciones
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Política de privacidad
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Aviso y configuración de cookies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-600 uppercase dark:text-white">
              Recursos adicionales
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Atención al cliente
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Preguntas fruecuentes(FAQ)
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Cursos
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Acreditaciones y premios{" "}
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Socios/membresias{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="px-4 py-2.5 bg-gray-200 dark:bg-gray-700 md:flex md:items-center
    md:justify-between pl-20 pr-20"
      >
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
          © 2025 <Link href="">CatadeVinos</Link>. Todos los derechos reservados
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
          <div className="flex flex-inline pt-3">
           <SocialMedia/>
          </div>
        </div>
      </div>
    </footer>
  );
}
