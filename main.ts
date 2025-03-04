export {}
let message = 'Welcome back!';
console.log(message);

let x = 10
const y = 20

let sum;
const title = "Codevolution";

let isBeginner: boolean = true;
let total: number = 0;
let Name: string = 'Daniel';

let sentece: string = `My name is ${Name} 
I am a beginner in Typescript`

console.log(sentece);

let n: null = null;
let u: undefined = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string, number] = ["Daniel",19];

enum Color {Red = 5 , Green, Blue};

let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true
randomValue = 'Daniel';

let myVariable: unknown = 'Daniel';

function hasName(obj: any): obj is {name: string}{
    return !!obj && 
    typeof obj === "object" && 
    "name" in obj
}

if (hasName(myVariable)){
    console.log(myVariable.name);
}
(myVariable as string).toUpperCase();

let a;
a = 10;
a = true;

let b = 20;

let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;

function add(num1: number, num2: number = 10): number{
    if(num2)
        return num1 + num2;
    else 
    return num1;
}

add(5,10)
add(5);

interface Person {
    firstName: string;
    lastName: string;
}
function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}

fullName(p);