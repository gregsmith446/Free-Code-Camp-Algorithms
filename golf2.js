var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    switch (true) {
        case strokes === 1:
            return(names[0]);
            break;
        case strokes <= par - 2:
            return(names[1]);
            break;
        case strokes == par - 1:
            return(names[2]);
            break;
        case strokes == par:
            return(names[3]);
            break;
        case strokes == par + 1:
            return(names[4]);
            break;
        case strokes == par + 2:
            return(names[5]);
            break;
        default:
            return(names[6]);
    }
    return;
}

golfScore(4, 2);