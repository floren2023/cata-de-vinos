"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import formSubmit from "./formSubmit";
import TableProducts from "./TableProducts";
import { category, product } from "@/app/types/all-types";
import { Textarea } from "@/components/ui/textarea";
const formSchema = z.object({
  name: z.string().min(3, {
    message: "Nombre de producto tiene mas de 3 caracteres",
  }),
  description: z.string().min(15, {
    message: "Descripción  tiene mas de 15 caracteres",
  }),
  image: z.string().nonempty({ message: "Imagen requerida" }),
  price: z.number().nonnegative(),
  inStock: z.boolean().default(true),
  categoryId: z
    .number()
    .nonnegative()
    .min(1, { message: "Categoria requerida" }),
});
type categories = category[];
type products = product[];

export default function ProductsForm(
  { products }: { products: products },
  { categories }: { categories: categories }
) {
  // ...
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      image: "",
      price: 0.0,
      inStock: true,
      categoryId: 1,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("image", values.image);
    formData.append("price", values.price.toString());
    formData.append("inStock", values.inStock.toString());
    formData.append("categoryId", values.categoryId.toString());
    let message = await formSubmit(formData);
    alert(message.message);

    if (message.message === "Producto ha sido creado") {
      products.push({
        id: products.length + 1,
        name: values.name,
        description: values.description,
        image: values.image,
        price: values.price,
        inStock: values.inStock,
        categoryId: values.categoryId,
      });
      form.resetField("name");
      form.resetField("description");
      form.resetField("image");
      form.resetField("price");
      form.resetField("inStock");
      form.resetField("categoryId");
    }
  }

  return (
    <div className=" mx-auto mt-5 pt-10 pb-10 pl-10">
      <Card className="m-auto p-6  text-xl   bg-red-100  ">
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
                        <Input
                          {...field}
                          type="file"
                          className="placeholder-red-500 "
                        />
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
                  name="inStock"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-inline gap-2">
                        <FormControl>
                          <Checkbox id="inStock" />
                        </FormControl>

                        <label
                          htmlFor="inStock"
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
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Catgoria" />
                          </SelectTrigger>
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
                      </FormControl>

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

      <div>{/* <TableProducts products={products} />  */}</div>
    </div>
  );
}
