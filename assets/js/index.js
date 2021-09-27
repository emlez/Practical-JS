//
// JS for Geometry Calc
//
// Code for square
function squarePerimeter(side) {
  return side * 4;
}

function squareArea(side) {
  return side * side;
}

// Square HTML to JS functions
function findSquarePerimeter() {
  const input = document.getElementById("squareInput");
  const value = input.value;

  const perimeter = squarePerimeter(value);
  alert(perimeter);
}
function findSquareArea() {
  const input = document.getElementById("squareInput");
  const value = input.value;

  const area = squareArea(value);
  alert(area);
}

// Code for triangle
function trianglePerimeter(side1, side2, base) {
  return side1 + side2 + base;
}

function triangleArea(base, height) {
  return (base * height) / 2;
}
// Code for Isoceles Triangle
// function isocelesTriangleHeight(side1, side2, base) {
//   if (side1 === side2 && side1 != base) {
//     const height = Math.sqrt(side1 * side1 - (base / 2) * (base / 2));
//     console.log(height);
//   } else {
//     console.log(false);
//   }
// }

// isocelesTriangleHeight(4, 4, 3);

// Triangle HTML to JS Functions
function findTrianglePerimeter() {
  const input1 = document.getElementById("triangleInput1");
  const value1 = Number(input1.value);
  const input2 = document.getElementById("triangleInput2");
  const value2 = Number(input2.value);
  const input3 = document.getElementById("triangleInput3");
  const value3 = Number(input3.value);

  const perimeter = trianglePerimeter(value1, value2, value3);
  alert(perimeter);
}
function findTriangleArea() {
  const base = document.getElementById("triangleBase");
  const value1 = base.value;
  const height = document.getElementById("triangleHeight");
  const value2 = height.value;

  const area = triangleArea(value1, value2);
  alert(area);
}

// Code for circle
// Diameter
function circleDiameter(radius) {
  return radius * 2;
}

// Pi
const Pi = Math.PI;

// Circumference
function circlePerimeter(radius) {
  const diameter = circleDiameter(radius);
  return diameter * Pi;
}

// Area
function circleArea(radius) {
  return radius * radius * Pi;
}

// Circle HTML to JS Functions
function findCircunference() {
  const radius = document.getElementById("circleInput");
  const value = radius.value;

  const circunference = circlePerimeter(value);
  alert(circunference);
}
function findCircleArea() {
  const radius = document.getElementById("circleInput");
  const value = radius.value;

  const area = circleArea(value);
  alert(area);
}

//
// JS for Percentages & Discounts Calc
//
// Rule of Three Functionality
function calculatePriceWithDiscount(price, discount) {
  const pricePercentageWithDiscount = 100 - discount;
  const priceWithDiscount = (price * pricePercentageWithDiscount) / 100;

  return priceWithDiscount;
}

// Valid Coupons
const coupons = [
  {
    name: "minus10",
    discountValue: 10,
  },
  {
    name: "minus15",
    discountValue: 15,
  },
  {
    name: "minus20",
    discountValue: 20,
  },
  {
    name: "free",
    discountValue: 100,
  },
];
console.group("Valid Coupons for Discounts 🤑");
console.log(coupons);
console.log("Shhh, don't tell anyone!");
console.groupEnd();

// Checks if user has a coupon
function doYouHaveACoupon() {
  // First, we bring the checkboxes to JS.
  let yesCoupon = document.getElementById("yesCoupon");
  yesCoupon = yesCoupon.checked;
  let noCoupon = document.getElementById("noCoupon");
  noCoupon = noCoupon.checked;

  // Then, we bring the HTML elements that are going to change depending on which checkbox is selected.
  let couponAlert = document.getElementById("couponAlert"); // Paragraph to let the user know what to do.
  let couponOrDiscount = document.getElementById("couponOrDiscount"); // Paragraph depending on what the user has, coupon or discount.
  let inputType = document.getElementById("discountInput"); // Input to text or number.

  couponAlert.className = "promptOpen"; // To display choice.

  // If statements for every possible outcome.
  if (yesCoupon && noCoupon) {
    couponAlert.innerText = "Pick only one option";
  } else if (yesCoupon) {
    couponOrDiscount.innerHTML = "Write your coupon:";
    couponAlert.innerText = "Continue";
    inputType.type = "text";
    inputType.placeholder = "Coupon";
    // inputType = inputType.type = "text";
    // inputType = inputType.placeholder = "Coupon";
  } else if (noCoupon) {
    couponOrDiscount.innerHTML = "Write the discount on your product:";
    couponAlert.innerText = "Continue";
    inputType.type = "number";
    inputType.placeholder = "0";
  } else {
    couponAlert.innerText = "Pick an option";
  }
}

// Discounted Price Function
function priceDiscounted() {
  // Brings the coupon paragraph to check you've pressed the first button.
  let couponAlert = document.getElementById("couponAlert");
  // Checks for coupon or discount.
  let inputType = document.getElementById("discountInput");

  // Brings the input from the user.
  let price = document.getElementById("priceInput");
  price = price.value;
  let discount = document.getElementById("discountInput");
  discount = discount.value;

  // Paragraph to display discount to the user.
  let resultPrice = document.getElementById("resultPrice");
  resultPrice.className = "promptOpen";

  // If statements for every possible outcome.
  if (
    price &&
    discount &&
    price != 0 &&
    discount != 0 &&
    couponAlert.innerText === "Continue"
  ) {
    // When it's a coupon.
    if (inputType.type == "text") {
      let isCouponValueValid = function (coupon) {
        return coupon.name === discount;
      };
      // Find user coupon in array of coupons.
      let userCoupon = coupons.find(isCouponValueValid);
      //If user's coupon is not in array.
      if (!userCoupon) {
        resultPrice.innerText = `The coupon "${discount}" is not valid
        Try another one`;
      } else {
        // User's coupon is valid.
        discount = userCoupon.discountValue;
        let priceWithDiscount = calculatePriceWithDiscount(price, discount);
        if (discount == 100) {
          resultPrice.innerText = `The price with discount is: $${priceWithDiscount}
          You're a wizard, Harry`;
        } else {
          resultPrice.innerText = `The price with discount is: $${priceWithDiscount}`;
        }
      }
    } else {
      // When it's a valid discount.
      let priceWithDiscount = calculatePriceWithDiscount(price, discount);
      if (price == discount) {
        resultPrice.innerText = `The price with discount is: $${priceWithDiscount}
        But, you already knew that... right?!`;
      } else if (price < discount) {
        resultPrice.innerText = `I don't think that's how it works...`;
      } else {
        resultPrice.innerText = `The price with discount is: $${priceWithDiscount}`;
      }
    }
  } else if (price && discount && price != 0 && discount != 0) {
    // Coupon or discount are not selected.
    resultPrice.innerText = "Pick whether you have a coupon or just a discount";
  } else if (price != 0 && discount == 0) {
    resultPrice.innerText = "Enter a valid discount";
  } else if (discount != 0 && price == 0) {
    resultPrice.innerText = "Enter a valid price";
  } else if (price == 0 && discount == 0) {
    resultPrice.innerText = "Enter a valid price and discount";
  }
}

//
// JS for Mean, Median & Mode Calc
//

// Arithmetic Mean
function mean() {
  // Get set of numbers given by user
  let listGiven = document.getElementById("listGiven");
  listGiven = listGiven.value;

  // Paragraph to display discount to the user.
  let meanResult = document.getElementById("mean");
  meanResult.className = "promptOpen";

  if (listGiven) {
    let list = listGiven.split(",").map(Number);

    let sumList = list.reduce(function (accumulatedValue = 0, newElement) {
      return accumulatedValue + newElement;
    });
    let meanList = sumList / list.length;
    meanResult.innerText = `The mean of those numbers is: ${meanList.toFixed(
      2
    )}`;
  } else {
    meanResult.innerText = "Please input a set of numbers.";
  }
}

// Median
function getMedian() {
  // Get set of numbers given by user
  let listGiven = document.getElementById("listGiven");
  listGiven = listGiven.value;

  // Paragraph to display discount to the user.
  let medianResult = document.getElementById("median");
  medianResult.className = "promptOpen";

  // Convert string into array.
  let list = listGiven.split(",").map(Number);

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

  if (listGiven) {
    function calculateMedian(list) {
      const halfList = parseInt(list.length / 2);

      // Sort Method
      list.sort(compareNumbers);

      // Checks if list is even or odd
      if (list.length % 2 === 0) {
        const elem1 = list[halfList - 1];
        const elem2 = list[halfList];
        const elem1and2 = calculateAritmethicMean([elem1, elem2]);
        // return (median = elem1and2);
        let median = elem1and2;
        medianResult.innerText = `The median of those numbers is: ${median.toFixed(
          2
        )}`;
      } else {
        // return (median = list[halfList]);
        let median = list[halfList];
        medianResult.innerText = `The median of those numbers is: ${median.toFixed(
          2
        )}`;
      }
    }

    calculateMedian(list);
  } else {
    medianResult.innerText = "Please input a set of numbers.";
  }
}

// Mode
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
