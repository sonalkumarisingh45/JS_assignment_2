/*
Q4. Second Smallest
You are given 33 distinct integers X, Y and Z and your task is to find and return the second smallest integer among the three provided integers.
Note: You have to complete findSndSmallest function. No need to take any input.
Input Format
The first and the only line of the input contains three space-separated integers X, Y, and Z, denoting the integers among which you have to find the second smallest element.
Output Format
Return the second smallest integer among the three integers given to you.
Constraints
1≤X, Y, Z≤500
X! =Y! =, Y!=Z!=, X!=Z
Example
Sample Input
2 9 23
  
Sample Output
9
*/

function findSndSmallest(X, Y, Z) {
    
    const numbers = [X, Y, Z];

    
    numbers.sort((a, b) => a - b);

   
    return numbers[1];
}


const X = 2;
const Y = 9;
const Z = 23;
console.log(findSndSmallest(X, Y, Z));  // Output: 9
