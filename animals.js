class Animal {
    constructor(age){
        this.age = age
        
    }
}

class Pig extends Animal{
    constructor(age){
        super(age)
        
    }

    getWeightInKg(){
       return this.age * 2.3    }
}

class Cow extends Animal{
    constructor(age){
        super(age)
    }

    getWeightInKg(){
       return this.age * 1.5
    }
}

class Horse extends Animal{
    constructor(age){
        super(age)
    }

    getWeightInKg(){
       return this.age * 1.7
    }
}

module.exports = {Animal, Pig, Horse, Cow}