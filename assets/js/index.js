// Code for square
console.group("Square 🟨");

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
console.group("Triangle ▲");

function trianglePerimeter(side1, side2, base) {
  return side1 + side2 + base;
}

function triangleArea(base, height) {
  return (base * height) / 2;
}
// Code for Isoceles Triangle
function isocelesTriangleHeight(side1, side2, base) {
  if (side1 === side2 && side1 != base) {
    const height = Math.sqrt(side1 * side1 - (base / 2) * (base / 2));
    console.log(height);
  } else {
    console.log(false);
  }
}

isocelesTriangleHeight(4, 4, 3);

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
console.group("Circle 🟡");

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
