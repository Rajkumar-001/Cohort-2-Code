import { PrismaClient } from "@prisma/client";
const primsa=new PrismaClient();




async function insertUser(email:string,password:string,firstName:string,lastName:string){

 const res=await primsa.user.create({
    data:{
        email,
        password,
        firstName,
        lastName
    },
    select:{
        id:true,
        password:true,
        firstName:true,

    }
 })

 console.log(res);


}


insertUser("rpandeya2345@gmail.com","123459","RajeshKumar","PandeyaSingh");




