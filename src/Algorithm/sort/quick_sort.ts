/**
 * returns max <= rand int <= min
 * @param min int returned is >= min
 * @param max int < max
 */

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

/**
 * Swaps elements at index 1 and 2 in array
 * @param array contains 2 or more eles
 * @param index1 index of element 1
 * @param index2 index of element 2
 */
const swap = (array: number[], index1: number, index2: number): void => {
  const temp = array[index2];
  array[index2] = array[index1];
  array[index1] = temp;
}

/**
 * Partition subarray arround ran pivot and return final pivot pos
 * @param array nums to be sorted
 * @param left index of left bound
 * @param right index of right bound
 */
const partition = (array: number[], left: number, right: number): number => {
  // picking a rand pivot
  const pivIndex = getRandomInt(left, right + 1);
  const pivValue = array[pivIndex];
  swap(array, left, pivIndex)

  // partition eles less than pivot value are grouped on the left
  let i = left + 1;
  for (let j = left + 1; j <= right; j++) {
    if (array[j] < pivValue) {
      swap(array, i, j);
      i++;
    }
  }
  swap(array, left, i - 1);
  // returns final pos of pivot
  return i - 1;
};

/**
 * Sort an array of numbers in-place and in ascending order.
 * Partitioning is done by choosing a random element as the pivot.
 *
 * Time complexity: O(n*log(n)) on average, where n is the number of elements to sort
 * Space complexity: O(log(n)) for recursion stack
 *
 * @param array - array of numbers to be sorted
 * @param left - Optional: index of left bound
 * @param right - Optional: index of right bound
 */
const quickSort = (array: number[], left = 0, right = array.length - 1): void => {
  // check that indices are intergers
  if (!Number.isInteger(left) || !Number.isInteger(right)) {
    console.error('Index Error: Left and right indices must be integers.');
    return
  }
  // implement quick sort algorithm
  if (left >= right) return
  const pivot = partition(array, left, right);
  quickSort(array, left, pivot - 1);
  quickSort(array, pivot + 1, right);
}

export default quickSort;
