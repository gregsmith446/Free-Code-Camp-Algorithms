function translatePigLatin(str) {
    // 2 variables = 1 for end result, 1 with vowels
    var pigLatin = "";
    var vowelCheck = /[aeiou]/gi; //global, and case INsenitive

    // use if statement to check if the first character is a vowel
    if (str[0].match(vowelCheck)) { //if it is, using .match, add "way" to end.
        pigLatin = str + "way";
    }
    else {

        // use a var to find how many consonants come before the first vowel.
        var vowelCount = str.indexOf(str.match(vowelCheck)[0]); //indexOf method

        //takes what's left of the string after the first vowel
        //then takes the removed consontants from the front...
        //and adds them to the end + "ay"
        pigLatin = str.substr(vowelCount) + str.substr(0, vowelCount) + "ay";
    }

    return pigLatin;
}

// test here
translatePigLatin("consonant");
