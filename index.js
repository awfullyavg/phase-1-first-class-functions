

function receivesAFunction(callback){
    callback();
  
}

function returnsANamedFunction(){
    return function namedFunction(){
        console.log("A function");
    }
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log("lol")
    }
}
