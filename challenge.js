const SlideWindow = (arr, n) => {
  // initialize placeholders for data
  let temp = 0;
  let maxsum = 0;

  // Loop over the array and assign the sum of the n 
  // consecutive number to the placeholders
  for(let i = 0; i < n; i++) {
    maxsum += arr[i];
  };

  // assign maxsum to temp to avoid tampering with
  // calculated maxsum;
  temp = maxsum;
  for(let j = n; j <= arr.length -1; j++) {

    // remove the first element and add the next elements
    // from the next batch
    temp = temp - arr[j - n] + arr[j];

    // compare temp with max and assign the biggest value
    // to maxsum
    maxsum = Math.max(maxsum, temp);

  };

  // return the maxsum of elements in the array
  return maxsum;
};

console.log(SlideWindow([1, 2, 3, 5, 8], 3));