// DNA pairing 

// input = string of chars.  will contain only ATCG, will only give one case
// test cases set length, not required though.

//output - array of DNA pairs. 2 char array, A&T, C&G. same length as input.

//input "GCG" output [[GC], [CG], [GC]}

// 1. split input into char array.

//working with ingle char

//2. check if firstChar is G
//create pair [G, C]
//3. Else if first char is C
//create pair [C, G]
//4. Else if first char is A
//create pair [A, T]
//5. Else if first char is T
//create pair [T, A]
//optional step 5, but good for future reference.
//end if

//6. Add to strand variable
//7. repeat step 3 for additional chars
//8. return strand

function pairElement(str) {
    var answer = []; //creates a new empty array where we push results to
    for (var i = 0; i < str.length; i++) { //iterates through the str 1 at a time
        if (str.charAt(i) === "G") { //if the current str character is a G,
            answer.push(["G", "C"]); //push the info into answer array
        }
        else if (str.charAt(i) === "C") { //if the current str character is a C,
            answer.push(["C", "G"]); //push the info into answer array
        }
        else if (str.charAt(i) === "A") { // same for A
            answer.push(["A", "T"]);
        }
        else if (str.charAt(i) === "T") { // same for T
            answer.push(["T", "A"]);
        }
    }
    return answer; //return the var/array, "answer" with the DNA pairs
}

pairElement("ATCGA");
