function chunkArrayInGroups(arr, size) {
    var multi = []; // array stores final answer
    var temp = []; // array hold temporary data
    for (i = 0; i < arr.length; i++) { //loops through given array
        if (i % size !== size - 1) {
            //if i/size is not = to (size - 1), aka it has a remainder
            temp.push(arr[i]); //push i to temp
            //console.log(temp);
        }
        else { //if i does = to (size - 1)
            temp.push(arr[i]);
            multi.push(temp);
            temp = [];
        }
    }
    if (temp.length !== 0)
        multi.push(temp);
    return multi;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
