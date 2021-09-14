const list1 = [100, 200, 5, 400000000];
const list2 = [5, 4, 33, 2, 1];
const list3 = [1, 2, 3, 109, 100, 200, 30];

let median;

// Function to calculate mean
function calculateAritmethicMean(number) {
  const sumList = number.reduce(function (accumulatedValue = 0, newElement) {
    return accumulatedValue + newElement;
  });

  const meanList = sumList / number.length;
  return meanList;
}

// Function needed to sort numbers correctly
function compareNumbers(a, b) {
  return a - b;
}

function calculateMedian(list) {
  const halfList = parseInt(list.length / 2);

  // Sort Method
  list.sort(compareNumbers);

  // Checks if list is even or odd
  if (list.length % 2 === 0) {
    const elem1 = list[halfList - 1];
    const elem2 = list[halfList];
    const elem1and2 = calculateAritmethicMean([elem1, elem2]);
    return (median = elem1and2);
  } else {
    return (median = list[halfList]);
  }
}

console.log(calculateMedian(list1));
console.log(calculateMedian(list2));
console.log(calculateMedian(list3));
