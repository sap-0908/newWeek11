function linearSearch(arr, target) {
  return arr.indexOf(target)
  // Can you solve this in one line?
};

function binarySearch(arr, target) {
  // Set integers pointing to the high and low range of possible indices
  let high = arr.length - 1
  let low = 0

  // While high and low indices do not overlap...
  while (low <= high) {
    let midpoint = Math.floor((low + high) / 2)
    if (midpoint === target) {
      return midpoint;
    } else if (target > midpoint) {
      low = midpoint + 1;
    } else {
      high = midpoint - 1;
    }
  }
  return -1
}

// Find the midpoint between high and low indices


// Compare the target value to the midpoint value

// If the target equals the midpoint...
// Return the midpoint index
// If the target is higher than the midpoint...
// Move the low pointer to midpoint + 1
// If the target is less than the midpoint...
// Move the high pointer to midpoint - 1

// Return -1 if the loop exits with overlapping pointers


module.exports = [linearSearch, binarySearch]
