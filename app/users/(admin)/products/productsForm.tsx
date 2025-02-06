"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "flowbite-react";
import formSubmit from "./formSubmit";
import TableProducts from "./TableProducts";
import { category, product } from "@/app/types/all-types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { GridProduct } from "./gridProduct";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Nombre de producto tiene mas de 3 caracteres",
  }),
  description: z.string().min(15, {
    message: "Descripción  tiene mas de 15 caracteres",
  }),
  image: z.string().nonempty({ message: "Imagen requerida" }),
  price: z
    .string()
    .refine((price) => !isNaN(parseFloat(price)), {
      message: "Precio es un numero",
    }),
  instock: z.string(),
  categoryId: z.string().nonempty({ message: "categoria requerida" }),
});
type categories = category[];
type products = product[];
interface Props {
  categories: categories;
  products: products;
}

export default function ProductsForm({ props }: { props: Props }) {
  // const {toast}=useToast()
  const products = props.products;
  const categories = props.categories;
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      image: "",
      price: "",
      instock: "on",
      categoryId: "Vino tinto",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    //datos en formato necesitado   para servidor

    const instock = values.instock === "on" ? true : false;
    const category = categories.filter(
      (item) => item.name === values.categoryId
    );
    const id = category[0].id;
    
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("image", values.image);
    formData.append("price", values.price.toString());
    formData.append("instock", instock.valueOf().toString());
    formData.append("categoryId", id.toString());

    let message = await formSubmit(formData);
    alert(message.message);
   /* const crear=message.message
    toast({
     title: "Crea evento:",
     description: crear,
   }) */

    if (message.message === "Producto ha sido creado") {
      const inStock = values.instock === "on" ? true : false;
      const category = categories.filter(
        (item) => item.name === values.categoryId
      );
      const id = category[0].id;

      products.push({
        id: products.length + 1,
        name: values.name,
        description: values.description,
        image: values.image,
        price: parseFloat(values.price),
        instock: inStock,
        categoryId: id, //category.name no es compatible con category.id
      });
      form.resetField("name");
      form.resetField("description");
      form.resetField("image");
      form.resetField("price");
      form.resetField("instock");
      form.resetField("categoryId");
    }
  }

  return (
    <div className="grid grid-cols-2 p-3 mt-10">
      <Card className="w-full p-3  text-xl bg-red-100  ">
        <CardHeader>
          <CardTitle>Crea un producto:</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="text-xl grid grid-cols-2 gap-3"
            >
              <div className="flex flex-col gap-3 text-semibold">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre producto</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="ej:Vino Rioja"
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
                      <FormLabel>Description Producto</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
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
                      <FormLabel>Imagen Producto</FormLabel>
                      <FormControl>
                        <Input {...field} className="placeholder-red-500 " />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="pl-5 flex flex-col gap-6 text-semibold">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Precio</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          className="placeholder-red-500 "
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="instock"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-inline gap-2">
                        <FormControl>
                          <Checkbox id="instock" {...field} />
                        </FormControl>

                        <label
                          htmlFor="instock"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          In Stock
                        </label>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="categoryId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Categoria</FormLabel>
                      <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger className="w-[180px]" >
                          <SelectValue placeholder="Category" />
                        </SelectTrigger>                        
                      </FormControl>
                      <SelectContent>
                          {categories.map((item, id) => {
                            return (
                              <SelectItem value={item.name} key={item.id}>
                                {item.name}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                        </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2">
                <Button
                  type="submit"
                  className="bg-red-800 font-bold hover:bg-red-700 "
                >
                  Crear
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      <GridProduct products={products} />
    </div>
  );
}
