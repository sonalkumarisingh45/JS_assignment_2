/*
Q1.Find Grades
Your school has the following grading system based upon the marks (M) obtained by a student:
 If M≤10, the grade will be E.
 If 11≥M≤20, the grade will be D.
 If 21≥M≤30, the grade will be C.
 If 31≥M≤40, the grade will be B.
 If 41≥M≤50, the grade will be A.
Your friend will enter his marks out of 5050, and your task is to print his grades using a switch statement. Note: You have to complete findGrades function. No need to take any input.
Input Format
The first and the only line of the input contain an integer M, representing the marks that your friend will enter in the grading system.
Output Format
Return the grade obtained by your friend.
Constraints
0≤M≤50
Example
Sample Input
1
Sample Output
E
*/
function findGrades(M) {
    let grade;

    switch (true) {
        case (M <= 10):
            grade = 'E';
            break;
        case (M <= 20):
            grade = 'D';
            break;
        case (M <= 30):
            grade = 'C';
            break;
        case (M <= 40):
            grade = 'B';
            break;
        case (M <= 50):
            grade = 'A';
            break;
        default:
            grade = 'Invalid marks';
    }

    return grade;
}

 
const M = 1;
console.log(findGrades(M));  
