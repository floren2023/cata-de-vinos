
import { Card } from "flowbite-react/components/Card";
import { Label } from "flowbite-react/components/Label";
import { TextInput } from "flowbite-react/components/TextInput";


export default function Register() {
  return (
    
    <div className=" mt-20 pt-10 pb-10 ">
   <Card className="w-1/4 mx-auto">
      
      <form className="mx-auto flex w-full flex-col gap-4">
      <div className="  text-center
      text-xl  text-red-800 font medium pb-5">Registrarse</div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Correo" />
        </div>
        <TextInput id="email2" type="email" placeholder="name@gmail.com" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Contraseña" />
        </div>
        <TextInput id="password2" type="password" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Repite contraseña" />
        </div>
        <TextInput id="repeat-password" type="password" required shadow />
      </div>
      
      <button type="submit" className='bg-red-900 hover:bg-red-800 p-3 rounded-lg text-white font-medium'>Registrar</button>
    </form>
    </Card>
    </div>
  );
}
