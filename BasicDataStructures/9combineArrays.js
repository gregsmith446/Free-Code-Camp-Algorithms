// Another huge advantage of the spread operator, is the ability to combine arrays, or to insert all the elements of one array into another, 
//at any index. 

// modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}

console.log(spreadOut());