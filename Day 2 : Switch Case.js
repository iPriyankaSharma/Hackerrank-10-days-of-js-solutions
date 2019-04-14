
function getLetter(s) {
    let letter;
    // Write your code here
    switch (true) {
        case 'aeiou'.includes(s[0]):
            letter = "A";
            break;
        case 'bcdefg'.includes(s[0]):
            letter = "B";
            break;
        case 'hijklm'.includes(s[0]):
            letter = "C";
            break;
        case 'nopqrstuvwxyz'.includes(s[0]):
            letter = "D";
            break;
        default:
            console.log("Default switch.");
    }
    
    return letter;
}
