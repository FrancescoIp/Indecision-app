
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi, I am ${this.name}!`
  }
  getDescription() {
    return `${this.name} is ${this.age} year${this.age > 1 ? 's' : ''} old.`
  }
};

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major
  }
  hasMajor() {
    return !!this.major
  }
  getDescription() {
    let description = super.getDescription();

    if(this.hasMajor()) {
      description += ` Their major is ${this.major}`
    }

    return description
  }
}

class Traveler extends Person {
  constructor(name, age, homeTown){
    super(name, age);
    this.homeTown = homeTown
  };
  hasHomeTown() {
    return !!this.homeTown
  }
  getGreeting() {
    let greetings = super.getGreeting();

    if(this.hasHomeTown()) {
      greetings += `I'm visiting from ${this.homeTown}`
    }

    return greetings
  };
}

const me = new Traveler('Francesco', 28, 'Palermo')
console.log(me.getGreeting())

const other = new Traveler()
console.log(other.getGreeting())

