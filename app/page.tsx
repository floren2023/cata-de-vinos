
import Header from "./components/header";
import Testimonios from "./components/testimonios";
import Experiencias from "./components/experiencias";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen    ">
      <main className="flex flex-col gap-5 items-center  mt-5 mx-auto justify-center pr-10 pl-10 z-20 pt-0 bg-gray-100">
       <Header/>
       <div className="bg-gradient-to-b from-red-200 to-gray-100">
       <Experiencias/>
       <Testimonios/>
       </div>  
            </main>
    </div>
  );
}
