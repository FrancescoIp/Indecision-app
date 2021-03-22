// arguments object - no longer bound with arrow functions

// questo printa gli arguments
const add = function (a, b) {
  console.log(arguments)
  return a + b; 
};
//questo no
// const addArrow = (a, b) => {
//   console.log(arguments)
//   return a + b; 
// };
console.log(add(11, 33))


// this keyword - no longer bound

const user = {
  name: 'Francesco',
  cities: ['Termini', 'Palermo', 'Knutzford'],
  printPlacesLived() {
    console.log(this.name);
    console.log(this.cities);
    //in una funziona non anonima, this si riferisce ai valori dentro l oggetto dove si trova la funzione
    //per una funziona anonima come quella sottostante, this non ha significato
    //per usare this anche nel foEach qui stotto, possiamo attribuirlo ad una costante "that" ed usare quella.

    // const that = this
    // this.cities.forEach(function(city) {
    //   console.log(that.name + ' lived in: ' + city)
    // })
    // per usare this, nel forEach senza impostare this, nella costante that, basta usare le arrow functions
    // this.cities.forEach((city) => {
    //   console.log(this.name + ' lived in: ' + city)
    // })
    //forEach ci permette di fare qualcosa con gli elementi dell array, map() ci permette di traformarli e immagazzinarli in una nuova costante
    return this.cities.map((city) => this.name + ' lived in ' + city)
  }
}
user.printPlacesLived()

const multiplaier = {
  numbers: [5, 7, 100],
  multiplyBy: [7],
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy)
  }

}

console.log(multiplaier.multiply())

