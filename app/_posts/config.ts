
const blogs=defineCollection({
  schema:z.object({
    titulo:z.string(),    
    linea1:z.string(),
    linea2:z.string(),
    linea3:z.string(),
    linea5:z.string(),
    linea4:z.string(),
    linea6:z.string(), 
    img:z.string(),
    readtime:z.number(),
    description:z.string(),
    autor:z.string(),
    fecha:z.string(),
    sortOrder: z.number(),
  })
})
export const collections=['blogs'];



