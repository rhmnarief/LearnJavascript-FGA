// console.log(`this is ${this}`);

var example = { a : 1, b : 2, c : 3 };
example.assign = function(){
    console.log(this)
    console.log(`Ini adalah assign method diluar object`)
}

example.assign();