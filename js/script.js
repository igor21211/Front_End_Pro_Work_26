class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  constructor() {
    this.residences = [];
  }
  addPerson(person) {
    this.residences.push(person);
  }
}

class Build {
  constructor(maxApartmentCount) {
    this.maxApartmentCount = maxApartmentCount;
    this.apartments = [];
  }

  addApartment(apartment) {
    if (this.apartments.length < this.maxApartmentCount) {
      this.apartments.push(apartment);
    } else {
      console.log("This building is full");
    }
  }
}
//Persons
const person1 = new Person("Zak", "MALE");
const person2 = new Person("Ana", "FEMALE");
const person3 = new Person("Jay", "MALE");
console.log(person1);
console.log(person2);
console.log(person3);
//Apartments
const apartment1 = new Apartment();
const apartment2 = new Apartment();
apartment1.addPerson(person1);
apartment2.addPerson(person2);
apartment2.addPerson(person3);
console.log(apartment1);
console.log(apartment2);
//House
const house = new Build(2);
house.addApartment(apartment1);
house.addApartment(apartment2);
console.log(house);
//Show message
console.log("====Error message=========");
const apartment3 = new Apartment();
const person4 = new Person("Mike", "MALE");
apartment3.addPerson(person4);
house.addApartment(apartment3);
