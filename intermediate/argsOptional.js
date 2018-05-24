function addTogether() {
    var numOne = arguments[0]
    if (typeof(numOne) !== 'number') {
        return undefined;
    }

    if (arguments.length === 2) {
        if (typeof(arguments[1]) === 'number') {
            return numOne + arguments[1];
        }
        return undefined;
    }

    return function() {
        if (typeof(arguments[0]) !== 'number') {
            return undefined;
        }
        return numOne + arguments[0];
    };

}

addTogether(2,3);

//must be numbers
//if 2 sent add together
//if one sent send back a function to chain to a function chain instead of a dot chain.

function addTogether() {
    var numOne = arguments[0];
    if (typeof(numOne) !== 'number') {
        return undefined;
    }

    if (arguments.length === 2) {
        return typeof(arguments[1]) === 'number' ? numOne + arguments[1] : undefined;
    }

    return function() {
        return typeof(arguments[0]) !== 'number' ? undefined : numOne + arguments[0];
    };

}

addTogether(2,3);

//must be numbers
//if 2 sent add together
//if one sent send back a function to chain to a function chain instead of a dot chain.


function addTogether() {
    var numOne = arguments[0];
    function addTwo(numTwo) {
        return typeof(numTwo) !== 'number' ? undefined : numOne + numTwo;
    }
    if (typeof(numOne) !== 'number') {
        return undefined;
    }

    if (arguments.length === 2) {
        return addTwo(arguments[1]);
    }

    return addTwo

}

addTogether(2,3);

//must be numbers
//if 2 sent add together
//if one sent send back a function to chain to a function chain instead of a dot chain.

// closure example
// function one(x) {
//     return function(y) {
//         console.log (x + y);
//     };
// }

// one(2)(4);

// // function(4) {
// //     console.log(2 + 4);
// // }