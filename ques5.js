/* 

Q5. Check whether the triangle is Acute or Obtuse
Write a program takes takes three angles and checks whether the triangle is acute or obtuse. Note: You have to complete Triangle_Check. No need to take any input
Input Format
The input contains three numbers A, B and C which denotes the angles of a triangle.
Output Format
Return the required result.
Constraints
0≤A, B, C≤180
Example
Sample Input
60 100 20
Sample Output
obtuse
*/

function Triangle_Check(A, B, C) {
  
    if (A + B + C !== 180) {
        return 'Invalid triangle'; 
    }

    
    if (A < 90 && B < 90 && C < 90) {
        return 'acute'; 
    } else {
        return 'obtuse';
    }
}


const A = 60;
const B = 100;
const C = 20;
console.log(Triangle_Check(A, B, C));  
