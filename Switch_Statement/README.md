## Switch Statement
Switch Statement is a statement that evaluates a value/expression, and matches the value to many case clauses.

Switch statement can also be seen as special type of if... else if statement that we can use to compare one value to a bunch of different values.
Instead of using multiple if and else if statements to perform a multiway branch, we can just use a switch statement which handles exactly this stituation and it does so more efficiently than repeated if...else if statements.

### Switch Statement Flowchart
![alt image](https://media.geeksforgeeks.org/wp-content/uploads/switch.png)

**Syntax:**
```
switch (expression){
    case 1:
        statement;
        break;
    case 2:
        statement;
        break;
    ...
    case n:
        statement;
        break;
    default:
        statement;
}
```
| Syntax | Description |
| ----------- | ----------|
| **expression** | specifies an expression to be evaluated. The expression is evaluated once. The value of the expression is compared with the values of each case labels in the structure. If there is a match, the associated block of code is executed |
| **case** | each of the case is checked against the value of the expression until a match is found |
| **break** | indicate the end of a particular case. if it is omitted, each statement will continue to execute |
| **default** | it is executed if no case matches the expression | 

*An example of Switch Statement*
```
let grade = 'A';
switch (grade){
    case 'A':
        console.log("Excellent!!!");
        break;
    case 'B':
        console.log("Very good");
        break;
    case 'C':
        console.log("Good");
        break;
    case 'D'
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
// The output is going to be 'A'.
```
### Rules for Switch Statement
- An expression must always execute to a result.
- Case labels must be constants and unique.
- Case labels must end with a colon(:).
- A break keyword must be pressent in each case.
- We can nest multiple switch statements.

*Assignment: :)*
- use switch statement to check for a particular day of the week and print the day to the terminal.
- variable should be getDay.
- case 0 should print Sunday
- case 1 should print Monday
- ...
- case 6 should print Saturday

#### Resources used:
- [geeksforgeeks](https://www.geeksforgeeks.org/switch-case-in-javascript/)
- [w3schools](https://www.w3schools.com/js/js_switch.asp)

#### Author
Aghogho Daniel Bogare <femoscopilala@gmail.com>
