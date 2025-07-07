const createCounter = function(init) {
    const forReset = init;
    const increment = () => {
        return init = init + 1;
    }
    const decrement = () => {
        return init = init - 1;
    }
    const reset = () => {
        return forReset;
    }
    const obj = {
        increment,
        decrement,
        reset
    }
    return obj;
};


counter = createCounter(0);
const result1 = counter.increment();
const result2 = counter.increment();
const result3 = counter.decrement();
const result4 = counter.reset();
const result5 = counter.reset();
console.log(result1,result2,result3,result4,result5);
// counter.decrement();