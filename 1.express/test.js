function add(a){
     return function(b){
        return a+b;
     }
}
var newAdd = add(1);
console.log(newAdd(2));