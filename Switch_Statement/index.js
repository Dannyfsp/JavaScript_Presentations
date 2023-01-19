// Switch Statement

let grade = 'A'; // grade can be seen as an expression here.

switch (grade){
    case 'A':
        console.log("Excellent!!!");
        break;
    case 'B': console.log("Very good");
        break;
    case 'C':
        console.log("Good");
        break;
    case 'D':
        console.log("Fair");
        break;
    case 'E':
        console.log("Needs improvement");
        break;
    case 'F':
        console.log("Failed");
        break;
    default:
        console.log(grade, "is an invalid grade!");
}