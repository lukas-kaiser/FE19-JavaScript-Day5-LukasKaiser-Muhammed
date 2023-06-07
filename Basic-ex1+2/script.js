let car1 = {
    brand: "BMW",
    model: "X5",
    color: "black",

    fullInfo: function(){
        return `This car is a ${this.brand}, model ${this.model} and its color is ${this.color}`
    }
}
let car2 = {
    brand: "Porsche",
    model: "Carrera",
    color: "silver",

    fullInfo: function(){
        return `This car is a ${this.brand}, model ${this.model} and its color is ${this.color}`
    }
}
let car3 = {
    brand: "Lamborghini",
    model: "Diablo",
    color: "yellow",

    fullInfo: function(){
        return `This car is a ${this.brand}, model ${this.model} and its color is ${this.color}.`
    }
}
let animal1 = {
    name: "Gorilla",
    type: "ape",
    color: "black",

    fullInfo: function(){
        return `This animal is called ${this.name} and it is part of the ${this.type} family. Its fur is ${this.color}.`
    }
}
let animal2 = {
    name: "Giraffe",
    type: "hoofed animals",
    color: "yellow and brown",

    fullInfo: function(){
        return `This animal is called ${this.name} and it is part of the ${this.type} family. Its fur is ${this.color}.`
    }
}
let animal3 = {
    name: "Husky",
    type: "dog",
    color: "white and grey",

    fullInfo: function(){
        return `This animal is called ${this.name} and it is part of the ${this.type} family. Its fur is ${this.color}.`
    }
}
let person1 = {
    name: "Lukas",
    gender: "Male",
    age: 31,

    fullInfo: function(){
        return `${this.name} is ${this.gender} and is ${this.age} years old.`
    }
}
let person2 = {
    name: "Johanna",
    gender: "Female",
    age: 26,

    fullInfo: function(){
        return `${this.name} is ${this.gender} and is ${this.age} years old.`
    }
}
let person3 = {
    name: "Alex",
    gender: "Diverse",
    age: 19,

    fullInfo: function(){
        return `${this.name} is ${this.gender} and is ${this.age} years old.`
    }
}

console.log(car1.fullInfo());
console.log(car2.fullInfo());
console.log(car3.fullInfo());
console.log(animal1.fullInfo());
console.log(animal2.fullInfo());
console.log(animal3.fullInfo());
console.log(person1.fullInfo());
console.log(person2.fullInfo());
console.log(person3.fullInfo());