///4. Write a function that behaves differently depending on the nr of arguments being passed

function firstOption (a, b) {
    return a + b;
}

function secondOption (a, b, c) {
    return a * b * c;
}

function thirdOption (a, b, c, d) {
    return (a + b) * (c + d);
}

function diffBehavior (a, b, c, d) {
    if (arguments.length == 2) {
        return firstOption (a, b);
    } else if (arguments.length == 3) {
        return secondOption (a, b, c);
    } else {
        return thirdOption (a, b, c, d);
    }
}

console.log(diffBehavior(1, 2));
console.log(diffBehavior(1, 3, 4));
console.log(diffBehavior(1, 2, 5, 2));
