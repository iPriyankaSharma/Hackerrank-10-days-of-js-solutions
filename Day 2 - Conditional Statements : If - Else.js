// Solution 1 
function getGrade(score) {
    let grade;
    // Write your code here
    if ( score > 25 && score <= 30) {
        return grade = "A";
    } else if (score > 20 &&  score <= 25) {
        return grade = "B";
    } else if (score > 15 && score <= 20) {
        return grade = "C";
    } else if (score > 10 && score <= 15) {
        return grade = "D";
    } else if (score > 5 && score <= 10) {
        return grade = "E";
    } else if (score >= 0 && score <= 5) {
        return grade = "F"; 
    }

    return grade;
}

// Solution - 2 

function getGrade(score) {
    return 'FEDCBA'[parseInt((score > 0 ? score - 1 : 0) / 5)];
}
