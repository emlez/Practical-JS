const list1 = [100, 200, 300, 500];

function calculateAritmethicMean(list) {
  // let sumList = 0;
  // for (let i = 0; i < list.length; i++) {
  //   sumList = sumList + list[i];
  // }

  const sumList = list.reduce(function (accumulatedValue = 0, newElement) {
    return accumulatedValue + newElement;
  });

  const meanList = sumList / list.length;

  return meanList;
}
