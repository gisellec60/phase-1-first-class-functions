const receivesAFunction = (postActivity) => {
    postActivity();
}

const returnsANamedFunction = () => {
    function namedFunction() {
        console.log("I am a named function") 
    }
    return namedFunction;
}

const returnsAnAnonymousFunction = () => {
    return function (){} 
}