const list1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];
const list2 = [10, 29, 123, 5, 23, 5, 331, 10, 10, 29];
const list3 = [1, 2, 3, 1, 1, 1, 1, 2, 3];

function mode(list) {
  const listCount = {};

  // Creates an object that counted the repetitions of a number in the original array
  list.map(function (elem) {
    listCount[elem] ? (listCount[elem] += 1) : (listCount[elem] = 1);
  });
  // Transforms the object into an array and sorts it in ascending order
  const listArray = Object.entries(listCount).sort(function (a, b) {
    return a[1] - b[1];
  });
  // Selects the last item in the array, since it's the mode
  const mode = listArray[listArray.length - 1];
  return mode;
}

console.log(mode(list1));
console.log(mode(list2));
console.log(mode(list3));
