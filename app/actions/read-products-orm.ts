import {db} from "../db/drizzle"
import { eq } from "drizzle-orm"
import {  categoryTable, productTable } from "../db/schema"
export default async function readProductOrm(){    
const products=await db.select().from(productTable)
.innerJoin(categoryTable,eq(categoryTable.id,productTable.categoryId)).where(eq(productTable.id,3))
	
console.log(products)

}
readProductOrm()