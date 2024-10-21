/*
Q2. Get Value
You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the table corresponding to an input character and return it.
| P or p - PrepBytes |
| Z or z - Zenith |
| E or e - Expert Coder |
| D or d - Data Structure |
Note: You have to complete getValue function. No need to take any input.
Input Format
The first and the only line of the input contain a character C, representing the character that you will get in input.
Output Format
Return the value corresponding to the input character.
Constraints
C will be one of the following characters: [P, p, Z, z, E, e, D, d].
Example
 Sample Input
E
Sample Output
Expert Coder

*/


function getValue(C) {
    let result;

    switch (C) {
        case 'P':
        case 'p':
            result = 'PrepBytes';
            break;
        case 'Z':
        case 'z':
            result = 'Zenith';
            break;
        case 'E':
        case 'e':
            result = 'Expert Coder';
            break;
        case 'D':
        case 'd':
            result = 'Data Structure';
            break;
        default:
            result = 'Invalid input';
    }

    return result;
}


const C = 'E';
console.log(getValue(C));  
