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
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { event } from "@/app/types/all-types";
import formSubmit from "./formSubmit";
import TableEventos from "./TableEventos";

const formSchema = z.object({
  title: z.string().min(10, {
    message: "Nombre de evento tiene mas de 10 caracteres",
  }),
  description: z.string().min(25, {
    message: "Nombre de evento tiena mas de 25 caracteres",
  }),
  image: z.string().nonempty({ message: "Imagen requerida" }),
  dateEv: z.date(),
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
      dateEv: new Date(),
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("image", values.image);
    formData.append("dateEv", values.dateEv.toISOString());
    let message = await formSubmit(formData);
    alert(message.message);

    if (message.message === "Event ha sido creado") {
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
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[190px] justify-start text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Elije fecha evento:</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
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
         <TableEventos events={events} /> 
    </div> 
      </div>
    
  );
}
