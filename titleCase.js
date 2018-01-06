function titleCase(str) {
    var allSmall = str.toLowerCase().split(" ");
    //splits the sentence into an array of all lowercase words
    //console.log(allSmall);
    //for loop goes through each word in each sentence
    for (var i = 0; i < allSmall.length; i++) {
        // the code below replaces letters a-z with an uppercase letter if they are the 1st letter of the word in a string.
        allSmall[i] = allSmall[i].replace(/[a-z]/, allSmall[i].substring(0, 1).toUpperCase());
        console.log(allSmall);
    }
    return allSmall.join(" ");
}

titleCase("I'm a little tea pot");
