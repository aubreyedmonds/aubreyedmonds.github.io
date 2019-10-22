//classes
//getters
//setters
//different way of using them compared to script2.js in inClass/102119 file

class Person{
    constructor(fName, lName){
        this._firstName = fName;
        this._lastName = lName;
    }
    // constructor(lName){
    //     this._lastName = lName;
    // }
    getFirstName(){
        return this._firstName;
    }
    getLastName(){
        return this._lastName;
    }
    setFirstName(fName){
        this._firstName = fName;
    }
}

me = new Person("Amy", "Anderson");
console.log(me.getFirstName());
console.log(me.getLastName());
console.log(typeof(Person));