// find "Waldo" in the string waldoIsHiding with a literal match

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);
console.log(result); //true because "Waldo" is a literal match to "Waldo."
// Any other variation of Waldo is false as it is not a literal match
// ex/ "WALDO" "WALdo" "waldo" "wAlDo"