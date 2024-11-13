import { Client } from "pg";

const client=new Client({
    // host:"postgresql://neondb_owner:noLUP2gQlZc1@ep-winter-wildflower-a5ode567.us-east-2.aws.neon.tech/neondb?sslmode=require",
    // port:5334,
    // database:"demoNeon",
    // password:"noLUP2gQlZc1",
    connectionString:"postgresql://neondb_owner:noLUP2gQlZc1@ep-winter-wildflower-a5ode567.us-east-2.aws.neon.tech/neondb?sslmode=require",

})




async function createUsersTables(){

    await client.connect()
    const result=await client.query(`


    CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL Unique,
        email VARCHAR(50) NOT NULL Unique,
        password VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
       
    )
    `)

    console.log(result)
}


async function insertUser(username:string,email:string,password:string){

    const result=await client.query(
        `
        INSERT INTO users(username,email,password) VALUES($1,$2,$3)


        `
    )


}

createUsersTables(); 
