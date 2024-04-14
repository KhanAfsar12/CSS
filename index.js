function show(){
const day = 3
let dayName;
switch(3){
    case 1:
        dayName = "Sunday";
        break;

    case 2:
        dayName = "Monday";
        break;

    case 3:
        dayName = "Tuesday";
        break;

    default:
        dayName = "Invalid day!"
}
console.log("The day is:", dayName)
}

// foreach loop
function foreach(){
    var a = [1,2,3,4,5,6,7,8,9,10];
    a.forEach(function(val){
        console.log(val+2);
    })
}

// for in loop --> Objects par loop karne ke liye hota hai.
function forin(){
var obj = {name: "Afsar", email: "ka484564@gmail.com", age: 21}
for(var key in obj){
    console.log(key, obj[key]);
}
}

function dowhile(){
    var a = 10;
    do{
        console.log("Hi");
        a++;
    }
    while(a > 12)
}



// It is a example of callback function
// setTimeout(function(){
//     console.log("ok");
// },5000);



// first class function --> means you can use function as value
// function some(a){
//     a();
// }
// some(function(){console.log("hello");})



var a = {
    name: "Afsar Khan",
    age: 21
}
delete a.name;
delete a.age;
console.log(a);