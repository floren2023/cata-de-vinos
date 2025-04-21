"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button, Modal } from "flowbite-react";
import { FaRegHeart } from "react-icons/fa";

interface Props {
  image: string;
  title: string;
  description: string;
  dateEv: string;
  hora: string;
  min: string;
}

function Evento({ image, title, description, dateEv, hora, min }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [modalPlacement] = useState("center");
  function cambiar(dateEv: string) {
    let date = new Date(dateEv);
    return date.toLocaleDateString("es-ES", {
      weekday: "short", // narrow, short
      year: "numeric", // 2-digit
      month: "short", // numeric, 2-digit, narrow, long
      day: "numeric", // 2-digit
    });
  }

  return (
    <>
      <Card className="w-[350px] h-[480px] text-md bg-white">
        <CardHeader>
          <div className="flex flex-inline justify-between">
            <CardTitle className="text-xl mt-2">{title}</CardTitle>
            <button type="button">
              <FaRegHeart className="text-red-800 w-6 h-6" />
            </button>{" "}
          </div>

          <div className="flex flex-inline gap-3 font-bold">
            <div className="text-md text-red-600">
              <span className="text-gray-500">Data:</span> {cambiar(dateEv)}
            </div>
            <div className="text-md text-red-600">
              <span className="text-gray-500">Hora:</span>
              {hora}:{min}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2 mt-2 text-md">
            <div className="object-contain rounded-md h-50">
              <Image
                src={image}
                alt={title}
                width={300}
                height={200}
                className="rounded-md h-[180px]"
              />
            </div>
            <CardDescription className="pt-2">{description}</CardDescription>

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
                <button
                  className="inline-flex h-10 items-center justify-center rounded-md
           bg-red-800 merienda-h3  px-5 font-medium text-neutral-50 transition active:scale-110 active:ring-red-600 active:ring-4 hover:ring-red-600"
                  onClick={() => setOpenModal(true)}
                >
                  Reservar
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Modal
        show={openModal}
        position={modalPlacement}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="text-red "> {title}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 p-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {description}
            </p>
            <p className="text-red leading-relaxed text-gray-500 dark:text-gray-400">
              {dateEv}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => setOpenModal(false)}
            className="p-2 rounded-md text-red-800 border-2 border-red-800 "
          >
            Apuntarme
          </button>
          <button
            color="gray"
            className="text-gray-400 border-2 border-gray-400 rounded-md p-2 ml-4"
            onClick={() => setOpenModal(false)}
          >
            Cancelar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Evento;
