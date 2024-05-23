const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	
const result = [];
    let subarray = [];
    let sum = 0;

    arr.forEach(num => {
        if (sum + num <= n) {
            subarray.push(num);
            sum += num;
        } else {
            result.push(subarray);
            subarray = [num];
            sum = num;
        }
    });

    // Add the last subarray to the result
    if (subarray.length > 0) {
        result.push(subarray);
    }

    return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));