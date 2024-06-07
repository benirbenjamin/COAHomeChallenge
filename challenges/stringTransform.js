
function strOperation(str) {
    const len = str.length; // Calculate the length of the input string
    let reverse; // Variable to store reversed string
    let asci; // Variable to store ASCII representation of characters
    const regex = /^[a-zA-Z\s]*$/; // Regular expression to check if the string contains only alphabets and spaces

    if (regex.test(str)) { // Check if the input string matches the regular expression
        if (len >= 1 && len < 1000) { // Check if the length of the input string is within the valid range
            if (len % 3 == 0) { // Check if the length is divisible by 3
                // code to reverse when divisible by 3
                reverse = str.split('').filter(char => char !== ' ').reverse().join(''); // Reverse the string while ignoring spaces
                return `${reverse}`; // Return the reversed string
            } else if (len % 5 == 0) { // Check if the length is divisible by 5
                // code to reverse when divisible by 5
                asci = str.split('').map(char => char.charCodeAt(0)).join(' '); // Convert characters to ASCII codes
                return `${asci}`; // Return the ASCII representation 
            } else if (len % 3 == 0 && len % 5 == 0) { // Check if the length is divisible by both 3 and 5
                // code to reverse when divisible by both 3 and 5
                reverse = str.split('').reverse().join(''); // Reverse the string
                asci = str.split(' ').map(char => char.charCodeAt(0)).join(' '); // Convert characters to ASCII codes
                return `${reverse}, + ${asci}`; // Return the reversed string and ASCII representation
            } else {
                // No condition met
                return "No condition met"; // If no condition is met
            }
        } else {
            return "Word must be less than 1000 in length"; // If the length of the string exceeds 1000 characters
        }
    } else {
        return "Word must only contain alphanumeric characters and spaces"; // If the string contains characters other than alphabets and spaces
    }
}

console.log(strOperation("Hamburger")); //input
console.log(strOperation("Pizza")); //input
console.log(strOperation("Chocolate Chip Cookie")); //input
