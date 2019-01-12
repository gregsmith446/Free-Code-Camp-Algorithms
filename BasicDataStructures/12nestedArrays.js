// arrays can contain an infinite depth of arrays that can contain other arrays, 
// each with their own arbitrary levels of depth, and so on. 
// we can still very easily access the deepest levels of an array this complex with bracket notation

// Somewhere on the third level, include the string 'deep', on the fourth level, include the string 'deeper', and on the fifth level, 
// include the string 'deepest'.

let myNestedArray = [ // lvl 1
  ['unshift', false, 1, 2, 3, 'complex', 'nested'], // lvl2
  [
    ['loop', 'shift', 6, 7, 1000, 'method', 'deep'] // lvl3
  ],
  [
    [
        ['concat', false, true, 'spread', 'array', 'deeper'] // lvl4
    ],
    [
      [
          ['mutate', 1327.98, 'splice', 'slice', 'push', 'deepest'], // lvl5
          ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
      ]
    ]
  ]
];

console.log(myNestedArray[2][1][0][0][0]);