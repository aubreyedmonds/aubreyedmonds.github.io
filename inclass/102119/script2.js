//classes
//getters
//setters
//different way of using them compared to script.js in inClass/102119 file 
class Person{
    constructor(firstName, lastName){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName(){
        return this._firstName + "*";
    }

    set firstName(fName){
        this._firstName = fName + "!";
    }
}

me = new Person("Amy", "Smith");
me.firstName = "Bobby"; //me.setfirstName("Bobby")
console.log(me.firstName); //me.getFirstName()
