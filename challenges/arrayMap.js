// Function to find subarrays whose sum equals the target
function arrayMap(size, arr, target) {
    let resultArr = []; // Array to store subarrays whose sum equals the target
    let isArrExist = false; // Flag to indicate if subarrays exist whose sum equals the target

    // Iterate over the array to find subarrays whose sum equals the target
    arr.map((el, i) => {
        let sum = el; // Initialize sum with the current element
        let subarray = [el]; // Initialize subarray with the current element
        // Iterate over subsequent elements to calculate the sum of subarrays
        for (let j = i + 1; j < arr.length; j++) {
            sum += arr[j];
            subarray.push(arr[j]);
            // Check if the sum of the current subarray equals the target
            if (sum == target) {
                isArrExist = true;
                resultArr.push(subarray); // Store the subarray in the result array
            }
        }
    });

    // Return whether subarrays exist whose sum equals the target
    return isArrExist;
}

// Example usage of the function
let size = 5; // Size of the array
let arr = [1, 2, 3, 4, 5]; // Array elements
let target = 9; // Target number
console.log(arrayMap(size, arr, target)); // Output: true or false
