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