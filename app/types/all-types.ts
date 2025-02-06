export type category = {
    id: number;
    name: string;

}
export type event={
    id:number,
    title:string,
    description:string,
    image:string,
    dateEv:string,
    dateAt:string
}
export type product={   
    id:number, 
    name:string,
    description:string,
    image:string,
    price:number,
    instock:boolean,
    categoryId:number
}