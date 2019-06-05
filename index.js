class Farm {
    constructor(name) {
        this.name = name
        this.crops = []
        this.animals = []
    }

    addCrop (crop){
        this.crops.push(crop)
    }

    calculateIncome() {
        return this.crops
        .map(crop => crop.getYieldInEuros())
        .reduce ((cropCV, cropAV) => cropCV + cropAV, 0)
        ||
        this.animals
        .map(animals => animals.getWeightInKg())
        .reduce ((animalCV, animalAV) => animalCV + animalAV, 0)
      } 

    addAnimal(animal){
        this.animals.push(animal)
    }

    calculateTV(){
        return this.crops
                    .map(crop => crop.getYieldInEuros())
                    .reduce ((cropCV, cropAV) => cropCV + cropAV, 0)
        +
        this.animals
                    .map(animals => animals.getWeightInKg())
                    .reduce ((animalCV, animalAV) => animalCV + animalAV, 0) 
    }
}
module.exports.Farm = Farm

