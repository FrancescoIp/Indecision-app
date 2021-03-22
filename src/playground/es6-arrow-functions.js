// const square = function (x) {
//   return x * x;
// } 
function square (x) {
  return x * x;
}

// l unico modo per aver accesso ad un arrow function è immagazzinarla in una costante ad esempio
// const squareArrow = (x) => {
//   return x * x
// }
// se la arrow function ritorna una singola espressione, possiamo rendere "return" implicito
const squareArrow = (x) => x * x

// console.log(square(8))
// console.log(squareArrow(8))

const fullName = "Luca Smith"

// const getFirstName = (fullName) => {
//   return fullName.split(' ')[0]
// }
const getFirstName = (fullName) => fullName.split(' ')[0]

console.log(getFirstName(fullName))