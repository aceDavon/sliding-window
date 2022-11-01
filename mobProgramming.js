// 1. Write a function taht accepts 2 parameters, An array and then an integer
// 2. Instantiate 2 variables, temp variable to hold temporary values and 
//    maxsum to hold the maximum sum of n consecutive numbers
// 3. Loop over the array and add the n consecutive sum to the maxsum
// 4. Assign the maxsum to the temp to check tampering with the calculated maxsum
// 5. Loop and subtract the first number from the n consecutive number on temp
//    add the first number from the array after the n consecutive number
// 6. Check to see if temp is bigger than maxsum and then assign the bigger value
//    to maxsum
// 7. Return the maxsum

const slidingWindow = (arr, n) => {
  let temp = 0;
  let maxsum = 0;

  for(let i = 0; i < n; i++) {
    maxsum += arr[i];
  }

  temp = maxsum;

  for(let j = n; j <= arr.length -1; j++) {
    temp = temp - arr[j - n] + arr[j];

    maxsum = Math.max(maxsum, temp);
  }

  return maxsum;
}


console.log(slidingWindow([1, 6, 4, 28, 3, 2, 15, 23, 88], 4));