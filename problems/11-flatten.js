/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
  // Your code here
  let result = [];
  // Iterate through each element in the array
  for (let element of arr) {
    // If the element is an array, recursively flatten it and concatenate the result
    if (Array.isArray(element)) {
      result = result.concat(flatten(element));
    } else {
      // If the element is not an array, simply add it to the result
      result.push(element);
    }
  }

  // Return the fully flattened result array
  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
