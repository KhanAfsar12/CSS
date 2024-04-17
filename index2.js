if(Math.random() > 0.5){
    var y = 5;
}
console.log(y);

console.log(x===undefined);
var x = 3;

(function(){
    console.log(x);
    var x = "local value";
})();

if(true){
var a;
}
console.log(a);
a = 10
