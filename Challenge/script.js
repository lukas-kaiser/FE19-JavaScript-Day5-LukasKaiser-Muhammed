const content = document.getElementById("content");
const globalArray = [];

class Car {
    constructor(brand, model, year, price, image){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
        this.image = image;
        globalArray.push(this);
    }
}

let car1 = new Car ("Porsche","Carrera",2021, "114.400$", "images/porsche.png");
let car2 = new Car ("Lamborghini","Diablo",2016, "250.000$", "images/lambo.jpeg");
let car3 = new Car ("Ferrari","F40",1992, "400.000$", "images/ferrari.jpeg");
let car4 = new Car ("Mini","Cooper",2021, "32.500$", "images/cooper.png");
let car5 = new Car ("VW","Golf 8",2023, "50.000$", "images/golf.jpeg");
let car6 = new Car ("Ford","Galaxy",2022, "49.000$", "images/galaxy.png");

for (let cars of globalArray) {
    content.innerHTML +=
    ` <div class="card" style="width: 100%;">
    <img src="${cars.image}" class="card-img-top" alt="${cars.brand} ${cars.model}">
    <div class="card-body">
      <h5 class="card-title">${cars.brand} ${cars.model}</h5>
      <p class="card-text">For more info click on the button.</p>
      <a href="#" class="btn btn-primary">More info</a>
    </div>
  </div>`
}