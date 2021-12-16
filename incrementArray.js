// This function increments a number as an array of digits
function incrementArrayNumber(array) {
    // Edge cases:
    if (!Array.isArray(array) || array.length === 0) // Not an array or empty
        return;
    if (array.some(elt => !Number.isInteger(elt) || !(elt >= 0 && elt <= 9))) // Not an array of digits
        return;

    let i = array.length - 1; // last digit
    // Checking all digits starting from the end
    while (array[i] === 9 && i >= 0) { // last checked digit is 9 and in array
        array[i] = 0;
        i--; // for checking the previous one in the next round
    }
    if (i < 0) // all digits was 9
        array.unshift(1);
    else
        array[i]++; // incrementing the one before the 9
    return array;
}

// For testing
let nbr = [1,9,9,9,9,9]; // <-- enter a valid Array<number>
console.log("Test : [" + nbr + '] + 1 = [' + incrementArrayNumber(nbr) + ']');