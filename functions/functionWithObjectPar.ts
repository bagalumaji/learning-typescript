function displayData(data:{id:number,name:string}):void{
    console.log(`id  :  ${data.id}  and name : ${data.name}`)
}
const data:{id:number,name:string}={
    id:12,
    name:"sharu"
};
displayData({id:12,name:"sharu"})
displayData(data);