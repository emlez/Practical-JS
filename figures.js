// Code for square
console.group("Square 🟨");
const squareSide = 5;
console.log(`The sides of the square measure: ${squareSide} cm.`);

const squarePerimeter = squareSide * 4;
console.log(`The perimeter of the square measures: ${squarePerimeter} cm.`);

const squareArea = squareSide * squareSide;
console.log(`The area of the square measures: ${squareArea} cm^2.`);
console.groupEnd();

// Code for triangle
console.group("Triangle ▲");
const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;
console.log(
  `The sides of the triangle measure: ${triangleSide1} cm, ${triangleSide2} cm and ${triangleBase} cm.`
);

const triangleHeight = 5.5;
console.log(`The height of the triangle measures: ${triangleHeight} cm.`);

const trianglePerimeter = triangleSide1 + triangleSide2 + triangleBase;
console.log(`The perimeter of the triangle measures: ${trianglePerimeter} cm.`);

const triangleArea = (triangleBase * triangleHeight) / 2;
console.log(`The area of the triangle measures: ${triangleArea} cm^2.`);
console.groupEnd();

// Code for circle
console.group("Circle 🟡");

// Radius
const circleRadius = 4;
console.log(`The circle's radius measures: ${circleRadius} cm.`);

// Diameter
const circleDiameter = circleRadius * 2;
console.log(`The circle's diameter measures: ${circleDiameter} cm.`);

// Pi
const Pi = Math.PI;
console.log(`Pi is: ${Pi}.`);

// Circumference
const circlePerimeter = circleDiameter * Pi;
console.log(`The circle's perimeter is: ${circlePerimeter}.`);

// Area
const circleArea = Pi * (circleRadius * circleRadius);
console.log(`The circle's area is: ${circleArea} cm^2.`);

console.groupEnd();
