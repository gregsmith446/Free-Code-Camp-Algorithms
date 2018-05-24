
function binaryAgent(str) {
    var strArray = str.split(' ');
    strArray = strArray.map(function(binary) {
        return parseInt(binary, 2);
    });
    str = String.fromCharCode.apply(null, strArray);
    return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");



//REFACTORED ONE LINER

// function binaryAgent(str) {
//     return String.fromCharCode.apply(null, str.split(' ').map(function(binary){return parseInt(binary, 2);}));
// }

// binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");