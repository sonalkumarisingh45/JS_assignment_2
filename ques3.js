/*

// this ia comment

Q3. Find the maximum out of three numbers.
Take three numbers and print the largest number among them if all of three are same print −1−1. Note: You have to complete Max_out_of_three. No need to take any input.
Input Format
The input contains three numbers A, B and C.
Output Format
Return the maximum number out of the three numbers as result.
Constraints
1≤A, B, C≤10000
Example
Sample Input
2 5 4
Sample Output
5

*/

function Max_out_of_three(A, B, C) {
    if (A === B && B === C) {
        return -1;  
    } else {
        return Math.max(A, B, C);  
    }
}


const A = 2;
const B = 5;
const C = 4;
console.log(Max_out_of_three(A, B, C));  
