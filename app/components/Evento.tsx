"use client";
import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Datepicker } from "flowbite-react";

interface Props {
  image: string;
  title: string;
  description: string;
  dateEv: string;
}


function Evento({ image, title, description, dateEv }: Props) {
  return (
    <Card className="w-[350px] h-[480px] text-md bg-white">
      <CardHeader>
        <CardTitle className="text-xl mt-2">{title}</CardTitle>
        
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2  text-md">
          <div className="object-contain rounded-md  h-[210px]">
            <Image src={image} alt={title} className="rounded-md" width={330} height={200}/>
          </div>
        </div>
        <div className="flex flex-col  justify-end mt-4">
          <p className="mb-2 text-center italic font-bold text-red-700 dark:text-gray-500 text-md tracking-tighter">
            {dateEv}
          </p>
          <CardDescription>{description}</CardDescription>
          <div className="flex flex-inline justify-end gap-5 mt-4 pt-5 items-baseline content-baseline">
          <div className="">
            <button
              type="button"
              id="abre-modal-evento"
              name="abre-modal-evento"
              className="text-green-500 text-md
                 italic  p-3 hover:text-red-800"
            >
              Ver mas
            </button>
          </div>

          <div className="justify-end ">
          <button className="inline-flex h-10 items-center justify-center rounded-md
           bg-red-800 merienda-h3  px-5 font-medium text-neutral-50 transition active:scale-110 ">
          
              Reservar
            </button>
          </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Evento;
