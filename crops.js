class Crop {
    constructor(acres){
        this.acres = acres
    }

    getCosts(){
        return this.cost
    }
    
    getYieldInEuros(){
        return this.getYieldInKg() * this.price 
    }
}
class Wheat extends Crop{
    constructor(acres){
        super(acres)
        this.price = 1.5
        this.cost = 340 * this.acres
    }

    getYieldInKg(){
        return Math.pow(this.acres * 1.5, 1.3)
    }
}

class Sugarcane extends Crop{
    constructor(acres){
        super(acres)
        this.price = 2
        this.cost = 166 * acres
    }

    getYieldInKg(){
        return Math.pow(this.acres * 2.6, 1.1)
    }
}



module.exports = {Wheat, Crop, Sugarcane}
