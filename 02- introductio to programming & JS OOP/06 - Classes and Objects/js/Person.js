class Person {
    static #ID = 0;
    constructor(name= "person", hairColor ='black', eyeColor ="black", skinColor ="white") {
        this.name = name; 
        this.hairColor = hairColor; 
        this.eyeColor = eyeColor; 
        this.skinColor = skinColor;  
    }
    approvedData() {
        console.log("your data saved iin successful way !"); 
        Person.#ID++;
    }
    gettingPersonData() {
        console.log(`id: ${Person.#ID}, name: ${this.name}, hair color: ${this.hairColor}, eye color: ${this.eyeColor}, skin color: ${this.skinColor}`)
    }
}