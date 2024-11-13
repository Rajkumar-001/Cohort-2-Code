// const x:number = 1;

// console.log(x);



// function greet(firstName:string){
//     return `Hello ${firstName}`;
// }


// console.log(greet('John'));



// function sum(a:number,b:number):number{
//     return a+b;
// }


// console.log(sum(1,2)); 


// interface User{
//     firstName:string;
//     lastName:string;
//     age:number;
//     email?:string;
// };



// function isLegal(user:User){
//     return user.age  >= 18;
// }



// isLegal({
//     firstName:'John',
//     lastName:'Doe',
//     age:18
// })

type greetArg=string|number;

function greet(name:greetArg){
    return `Hello ${name}`;
}

console.log(greet('John'));




type Employee={
    name:string;
    startDate:Date;
}


interface Manager{
    name:string;
    department:string;

}

type TechLead=Employee&Manager; 

const t:TechLead={
    name:'John',
    startDate:new Date(),
    department:'IT'
}  

console.log(t);


//what is the difference between type and interface in typescript
//  type is used to create a new name for a type, while interface is used to create a new name for an object type.

// type can also be used to create union types, intersection types, and other types that are not object types.
// interface can only be used to define object types.

// type is more powerful and flexible than interface, but it's also more complex and harder to understand.

// interface is simpler and easier to understand, but it's also more limited and less powerful than type.




interface User{
    firstName:string;
    lastName:string;
    age:number;
}



function filterUsers(users:User[]){
    return users.filter(user=>user.age>=18);
}


const users:User[]=[
    {
        firstName:'John',
        lastName:'Doe',
        age:18
    },
    {
        firstName:'Jane',
        lastName:'Doe',
        age:17
    }
]

console.log(filterUsers(users));

type KeyInput='ArrowUp'|'ArrowDown'|'ArrowLeft'|'ArrowRight';





function doSomething(keyPressed:KeyInput){


}


doSomething('ArrowUp');
// doSomething("ArrowD");


enum Direction{
    Up,
    Down,
    Left,
    Right
}






function identity<T>(arg:T){
    return arg;
}


console.log(identity(1));
console.log(identity('Hello'));




function getFirstElement<T>(arr:T[]):T{
    return arr[0];

}


const e1=getFirstElement<string>(["harkirat","singh"]);

console.log(e1.toUpperCase());







