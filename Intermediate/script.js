class Car {
    brand;
    model;
    color;
    constructor(brand,model,color) {
        this.brand = brand;
        this.model = model;
        this.color = color;
    }
    fullInfo(){
        return `This car is a ${this.brand}, model ${this.model} and its color is ${this.color}`
    }
}
 let car1 = new Car("BMW","X5","black");
 let car2 = new Car("Porsche","Carrera","silver");
 let car3 = new Car("Lamborghini","Diablo","yellow");
 
 class Animal {
    name;
    type;
    color;
    constructor(name,type,color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
    fullInfo(){
        return `This animal is called ${this.name} and it is part of the ${this.type} family. Its fur is ${this.color}.`
    }
}
 let animal1 = new Animal("Gorilla","ape","black");
 let animal2 = new Animal("Giraffe","hoofed animals","yellow and brown");
 let animal3 = new Animal("Husky","dog","white and grey");

 class Person {
    name;
    gender;
    age;
    constructor(name,gender,age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    fullInfo(){
        return `${this.name} is ${this.gender} and is ${this.age} years old.`
    }
}
 let person1 = new Person("Lukas","Male",31);
 let person2 = new Person("Johanna","Female",26);
 let person3 = new Person("Alex","Diverse",19);
 
 class Motorbike extends Car{
    wheels;
    rider;

    constructor(brand,model,color,wheels,rider) {
        super(brand,model,color);
        this.wheels = wheels;
        this.rider = rider;
    }
    fullInfo(){
        return `This Motorbike is a ${this.brand}, model ${this.model} and its color is ${this.color}. It has ${this.wheels} wheels and ${this.rider} like to ride it.`
    }
 }

 class Fish extends Animal{
    water;
    depth;

    constructor(name,type,color,water,depth) {
        super(name,type,color);
        this.water = water;
        this.depth = depth;
    }
    fullInfo(){
        return `This fish is called ${this.name} and it is part of the ${this.type} family. Its scales are ${this.color} and it inhabits up to ${this.depth} deep ${this.water}.`
    }
 }

 class Profession extends Person{
    job;
    industry;

    constructor(name,gender,age,job,industry) {
        super(name,gender,age);
        this.job = job;
        this.industry = industry;
    }
    fullInfo(){
        return `${this.name} is ${this.gender} and is ${this.age} years old. ${this.name} works as ${this.job} in the ${this.industry} industry.`
    }
 }

 let motorbike1 = new Motorbike("Harley Davidson","V-Rod","black",2,"members of the Hell's Angels");
 let motorbike2 = new Motorbike("Yamaha","Niken GT","blue",3,"people who don't care about looking silly");
 let motorbike3 = new Motorbike("Kawazaki","Ninja","lime green",2,"people who like to go fast");
  
 console.log(motorbike1.fullInfo());
 console.log(motorbike2.fullInfo());
 console.log(motorbike3.fullInfo());

 let fish1 = new Fish("Anglerfish","bony fish","red","salt water","2.500m");
 let fish2 = new Fish("Pike","carnivorious fish","green-blue","freshwater","12m");
 let fish3 = new Fish("Great White Shark","cartilaginous fish","grey and white","salt water","1.200m");

 console.log(fish1.fullInfo());
 console.log(fish2.fullInfo());
 console.log(fish3.fullInfo());

 let profession1 = new Profession("Franz","Male",31,"doctor","Medicine");
 let profession2 = new Profession("Gertrudhilda","Female",56,"saleswoman","Automobile");
 let profession3 = new Profession("Bolo","Diverse",24,"guinea pig","Pharma");

 console.log(profession1.fullInfo());
 console.log(profession2.fullInfo());
 console.log(profession3.fullInfo());