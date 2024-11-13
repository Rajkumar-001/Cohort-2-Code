const jwt=require('jsonwebtoken');



const value={
    name:"Rahul Kumar",
    accountNuber:1234567890,
}


const token=jwt.sign(value,"Secret");
console.log(token);