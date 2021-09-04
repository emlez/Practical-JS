// Code for square
console.group("Square 🟨");

function squarePerimeter(side) {
  return side * 4;
}

function squareArea(side) {
  return side * side;
}

console.groupEnd();

// Code for triangle
console.group("Triangle ▲");

function trianglePerimeter(side1, side2, base) {
  return side1 + side2 + base;
}

function triangleArea(base, height) {
  return (base * height) / 2;
}

console.groupEnd();

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

console.groupEnd();
