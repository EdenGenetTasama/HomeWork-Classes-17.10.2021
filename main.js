class Cars {
  carBrand;
  year;
  static counter = 0;
  starsNum;
  constructor(brand, year, starsNum) {
    this.carBrand = brand;
    this.year = year;
    Cars.counter++;
    this.starsNum = starsNum;
  }
  static getNewer(yearCarOne, yearCarTwo) {
    return yearCarOne.year < yearCarTwo.year ? yearCarTwo : yearCarOne;
  }
  static getLargerStarNum(starNum, starTwoNum) {
    return starNum.starsNum > starTwoNum.starsNum
      ? starNum.carBrand
      : starTwoNum.carBrand;
  }
}

let carOne = new Cars("mazda", 1996, 5);
let carTwo = new Cars("toyota", 2001, 4);
let carThree = new Cars("suzoki", 2011, 3);
let carFour = new Cars("hundai", 2021, 1);

console.log(Cars.counter);

console.log(Cars.getNewer(carThree, carFour));

console.log(Cars.getLargerStarNum(carFour, carTwo));

// Cars.getNewer(carOne,carTwo);
/*********************************************************************** */
class Cat {
  name;
  age;
  color;
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
  animalSound() {
    return `my name is: ${this.name}, And i make a MIA-OOOO sound`;
  }
  allKeys() {
    return `${this.name} , ${this.age} , ${this.color}`;
  }
}

class Lion extends Cat {
  constructor(name, age, color, weight) {
    super(name, age, color);
    this.weight = weight;
  }
  allKeysLion() {
    return `${super.allKeys()} ${this.weight}`;
  }
}

class Tiger extends Cat {}

class Poma extends Cat {}

let lionOne = new Lion("kittyLion", 10, "white", 200);
// console.log(lionOne.allKeysLion());

let tigerOne = new Tiger("tigerOne", 30, "black");
// console.log(tigerOne.animalSound());

let catOne = new Cat("Levana", 8, "pink");
// console.log(catOne.animalSound());

//! צרו מחלקה עם 3 שדות ופונקציה סטטית אחת,2 שדות טקסט ושדה מספר אחד, הפונקציה היא פונקציית random  */
//!מותאמת לפי הנתונים שהמחלקה מקבלת בבנאי. לדוג': במידה והמספר הוא 1000 אז המספר שיחזור יהיה בין 0 ל 999 .

class User {
  fname;
  lname;
  age;
  constructor(name, lname, age) {
    this.fname = name;
    this.lname = lname;
    this.age = age;
  }
  random(number) {
    let randomNum = Math.floor(Math.random() * number);
    return randomNum;
  }
}

let userOne = new User("eden", "tasama", 20);

console.log(userOne.random(5));

//!כתבו תוכנית שמקבלת מהמשתמש נתונים של שם, סיסמה, מייל ושם משתמש. התוכנית יוצרת מופע של משתמש.

class UserForm {
  fname;
  userName;
  password;
  email;
  constructor(fname, userName, password, email) {
    this.fname = fname;
    this.userName = userName;
    this.password = password;
    this.email = email;
  }
}

btnID.onclick = () => {
  let user = new UserForm(
    fullNameID.value,
    UserNameID.value,
    passwordID.value,
    emailID.value
  );
  console.log(user);
  showTableInfo.innerHTML += `<table>
    <tr>
    <th>Full name</th>
    <th>User name</th>
    <th>Password</th>
    <th>Email</th>

    </tr>

    <tr>
    <td>${fullNameID.value}</td>
    <td>${UserNameID.value}</td>
    <td>${passwordID.value}</td>
    <td>${emailID.value}</td>
    </tr>
    </table>`;
};

//! מדינה, עיר וכפר

class Community {
  cityName;
  numCitizen;
  constructor(name, number) {
    this.cityName = name;
    this.numCitizen = number;
  }
  fullInfo() {
    return `name:${this.cityName} , number : ${this.numCitizen}`;
  }
  static largerNumCitizen(citizenOne, citizenTwo) {
    return citizenOne.numCitizen > citizenTwo.numCitizen
      ? citizenOne
      : citizenTwo;
  }
}

class City extends Community {
  fullInfo() {
    return `${super.fullInfo()} , City`;
  }
}

class Country extends Community {
    fullInfo() {
        return `${super.fullInfo()} , Country`;
    }
}

class Village extends Community {
    fullInfo() {
        return `${super.fullInfo()} , Village`;
    }
}

let VillageOne = new Village("rehovot", 50);
let CityOne = new City("ramatGan", 36);

console.log(Community.largerNumCitizen(VillageOne, CityOne));


// btnSendID.onclick=()=>{
//     let communityType = new Community(
//       console.log(option.value);
//       );
// }


selectID.onchange=()=>{
    return selectID.options[selectID.selectedIndex].value;

}
/************************************************************************* */

class AllCars {
  wheelNum;
  smk;
  color;
  constructor(wheelNum, smk, color) {
    this.wheelNum = wheelNum;
    this.smk = smk;
    this.color = color;
  }

  fullInfo() {
    return `Wheels number:${this.wheelNum}, Smk: ${this.smk} , Color:${this.color}`;
  }

  static largerSmk=(array)=> {
    let maxSmk = 0;
    let objectSmk = null;
    for (let i = 0; i < array.length; i++) {
      if (array[i].smk > maxSmk) {
        maxSmk = array[i].smk;
        objectSmk = array[i];
      }
    }
    // console.log(objectSmk);
    return objectSmk;
  }
}

class Track extends AllCars {
  constructor(wheelNum, smk, color) {
    super(wheelNum, smk, color);
    this.name = "Track";
  }
  fullInfo() {
    return `${super.fullInfo()} , ${this.name}.`;
  }
  funUpperCase() {
    return this.name.toUpperCase();
  }
  get getUpperCase() {
    return this.funUpperCase();
  }
}

class Bus extends AllCars {
  constructor(wheelNum, smk, color) {
    super(wheelNum, smk, color);
    this.name = "Bus";
  }
  fullInfo() {
    return `${super.fullInfo()}, ${this.name}.`;
  }
}

class Privet extends AllCars {
  constructor(wheelNum, smk, color) {
    super(wheelNum, smk, color);
    this.name = "Privet";
  }
  fullInfo() {
    return `${super.fullInfo()} , ${this.name}.`;
  }
}

let TrackOne = new Track(4, 2000, "Green");
let TrackTwo = new Track(9, 7000, "Blue");
let TrackThree = new Track(1, 1000, "Yellow");
// let array = [TrackOne,TrackTwo,TrackThree];

console.log(AllCars.largerSmk([TrackOne,TrackTwo,TrackThree]));
