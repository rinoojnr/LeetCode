# Question
## 693. Binary Number with Alternating Bits

**Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.**

### Example 1:

```Input: n = 5
Output: true
Explanation: The binary representation of 5 is: 101
```
### Example 2:

```Input: n = 7
Output: false
Explanation: The binary representation of 7 is: 111.
```
### Example 3:

```Input: n = 11
Output: false
Explanation: The binary representation of 11 is: 1011.
```
 

# Answer

## Intuition
My initial approach would be to convert the given positive integer into its binary representation and then iterate through the binary digits, checking if adjacent bits are alternating. I could use a loop to compare each bit with its neighbor and return false if any adjacent bits are the same. If the loop completes without finding any such pair, I would return true. I might need additional variables to keep track of the previous bit during the iteration. This approach seems straightforward and efficient for determining if a number has alternating bits.

## Approach
- Convert to Binary : First, we convert the given number into its binary representation. This means expressing the number using only 0s and 1s.

- Check Alternation: Next, we look at each pair of neighboring bits in the binary representation. If every pair has different values (alternates between 0 and 1), we can say that the bits are alternating.

- Return Result: If we find any adjacent bits that are the same, we conclude that the bits are not alternating, and we return false. Otherwise, if all pairs of adjacent bits are different, we return true.

This algorithm relies on the fact that for alternating bits, every bit must be different from its adjacent bits, creating a clear pattern of 01 or 10.

## Complexity
- Time complexity: O(log n)
- Space complexity: O(log n)
  
## Code
```
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    // Convert the number to binary representation
    const binaryNumber = n.toString(2);

    // Initialize the previous bit with the first bit of the binary representation
    let preveBit = binaryNumber[0];

    // Iterate through the binary representation starting from the second bit
    for(let i = 1;i<binaryNumber.length;i++){
        // Check if the current bit is the same as the previous bit
        if(binaryNumber[i] === preveBit){
            return false
        }else{
            // Update the previous bit for the next iteration
            preveBit = binaryNumber[i];
        }
    }
    // If all adjacent bits are different, return true
    return true;
};
```
