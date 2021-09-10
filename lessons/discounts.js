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

  // If statements for every possible outcome.
  if (yesCoupon && noCoupon) {
    couponAlert.innerText = "Pick only one option";
  } else if (yesCoupon) {
    couponOrDiscount.innerHTML = "Write your coupon:";
    couponAlert.innerText = "Continue";
    inputType = inputType.type = "text";
  } else if (noCoupon) {
    couponOrDiscount.innerHTML = "Write the discount on your product:";
    couponAlert.innerText = "Continue";
    inputType = inputType.type = "number";
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
        alert(`The coupon ${discount} is not valid`);
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
