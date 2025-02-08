"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

import { event } from "@/app/types/all-types";
import formSubmit from "./formSubmit";
import TableEventos from "./TableEventos";
import { useToast } from "@/hooks/use-toast";
import { GridEvent } from "./gridEvent";

const formSchema = z.object({
  title: z.string().min(10, {
    message: "Nombre de evento tiene mas de 10 caracteres",
  }),
  description: z.string().min(25, {
    message: "Nombre de evento tiena mas de 25 caracteres",
  }),
  image: z.string().nonempty({ message: "Imagen requerida" }),
  dateEv: z.string(),
});

type events = event[];

export default function EventsForm({ events }: { events: events }) {
  // ...
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
      dateEv: '',
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // const { toast } = useToast()
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("image", values.image);
    formData.append("dateEv", values.dateEv);
    let message = await formSubmit(formData);
   alert(message.message);
   /*  const crear=message.message
    toast({
     title: "Crea evento:",
     description: crear,
   }) */
    if (message.message === "Evento creado con exito!") {
      events.push({
        id: events.length + 1,
        title: values.title.toString(),
        description: values.description.toString(),
        image: values.image.toString(),
        dateEv: values.dateEv.toString(),
        dateAt:(new Date()).toDateString()
      });
      form.resetField("title");
      form.resetField("description");
      form.resetField("image");
      form.resetField("dateEv");
    }
  }

  return (
    <div className="grid grid-cols-3 mx-auto mt-5 pt-10 pb-10 pl-10">
      <div className="min-w-48">
        <Card className="m-auto p-6  text-xl   bg-red-100  ">
          <CardHeader>
            <CardTitle>Crea un evento:</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 text-xl flex flex-col gap-3"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Titulo Evento</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="ej:Cata de verano"
                          {...field}
                          className="placeholder-red-500 "
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description Evento</FormLabel>
                      <FormControl>
                        <Input {...field} className="placeholder-red-500 " />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Imagen Evento</FormLabel>
                      <FormControl>
                        <Input {...field} className="placeholder-red-500 " />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="dateEv"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Data Evento</FormLabel>
                      <FormControl>
                       <Input  {...field}/>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="bg-red-800 font-bold hover:bg-red-700 "
                >
                  Crear
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-2">
         <GridEvent events={events} /> 
    </div> 
      </div>
    
  );
}
