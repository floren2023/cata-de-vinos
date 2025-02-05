export default async function Events({params}:{params:{id:string}} ){
    const {id} =await params;
    return <div>Events  {id}</div>
}