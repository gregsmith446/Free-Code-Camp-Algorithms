// DNA pairing 

// input = string of chars.  will contain only ATCG, will only give one case
// test cases set length, not required though.

//output - array of DNA pairs. 2 char array, A&T, C&G. same length as input.

//input "GCG" output [[GC], [CG], [GC]}

// 1. split input into char array.

//working with ingle char

//2. check if firstChar isG
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
//7. repeat step 3 for additional charsr
//8. return strand
