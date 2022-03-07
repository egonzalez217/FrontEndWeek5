class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  description() {
    return `A ${this.make} ${this.model}`;
  }
}

class Garage {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.cars = [];
  }

  //Add car to array of cars
  addCar(car) {
    if (car instanceof Car) {
      this.cars.push(car);
    } else {
      throw new Error(
        `Argument is not a Car. Must be of type Car(make, model)`
      );
    }
  }

  //delete car from array of cars based of the index and only remove one using splice(index, 1)
  deleteCar(car) {
    let index = this.cars.indexOf(car);
    this.cars.splice(index, 1);
  }

  description() {
    return `${this.name} has ${this.garage.length} cars!`;
  }
}

class Menu {
  constructor() {
    this.garages = [];
    this.selectedGarage = null;
  }
  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.createGarage();
          break;
        case "2":
          this.viewGarage();
          break;
        case "3":
          this.deleteGarage();
          break;
        case "4":
          this.displayGarages();
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions();
    }

    alert("Goodbye!");
  }

  showMainMenuOptions() {
    return prompt(`
            0) Exit
            1) Create New Garage
            2) View Garage
            3) Delete
            4) Display All Garage
          `);
  }

  showGarageMenuOptions(garageInfo) {
    return prompt(`
  0) back
  1) create car
  2) delete car
  ----------------
  ${garageInfo}
  `);
  }

  displayGarages() {
    let garageString = "";
    for (let i = 0; i < this.garages.length; i++) {
      garageString += i + ") " + this.garages[i].name + "\n";
    }
    if (garageString == "") {
      alert("There are no garages to display");
    } else {
      alert(garageString);
    }
  }

  createGarage() {
    let name = prompt("Enter name for the new garage: ");

    let id = 0;

    if ((this.garages.length - 1) << id) {
      id = 0;
    } else {
      id = this.garages.length - 1;
    }

    this.garages.push(new Garage(id++, name));
  }

  viewGarage() {
    let index = prompt("Enter the index of the garage you wish to view: ");
    if (index > -1 && index < this.garages.length) {
      this.selectedGarage = this.garages[index];
      let description = "Garage name: " + this.selectedGarage.name + "\n";

      for (let i = 0; i < this.selectedGarage.cars.length; i++) {
        description +=
          "  " +
          i +
          ")" +
          this.selectedGarage.cars[i].make +
          "-" +
          this.selectedGarage.cars[i].model +
          "\n";
      }

      let selection = this.showGarageMenuOptions(description);
      switch (selection) {
        case "1":
          this.createCar();
          break;
        case "2":
          this.deleteCar();
          break;
      }
    }
  }

  deleteGarage() {
    let index = prompt("Enter id of garage you wish to delete: ");
    if (index > -1 && index < this.teams.length) {
      this.teams.splice(index, 1);
    } else {
      return;
    }
  }

  createCar() {
    let make = prompt("Enter Make for new car: ");
    let model = prompt("Enter model for new car");
    this.selectedGarage.cars.push(new Car(make, model));
  }

  deleteCar() {
    let index = prompt("Enter the index of the car you wish to delete: ");

    if (index > -1 && index < this.selectedGarage.cars.length) {
      this, this.selectedGarage.cars.splice(index, 1);
    }
  }
}

let menu = new Menu();
menu.start();
