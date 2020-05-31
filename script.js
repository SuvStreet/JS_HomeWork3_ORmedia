function Laptop(name, model, serialNumber, yearManufacture, sizeRam, sizeRom, odd, weight){
    this.name = name;
    this.model = model;
    this.serialNumber = serialNumber;
    this.yearManufacture = yearManufacture;
    this.sizeRam = sizeRam;
    this.sizeRom = sizeRom;
    this.odd = odd;
    this.weight = weight;
    var sizeDesignation = " Gb";
    this.getSizeRam = function(){
        return this.sizeRam + sizeDesignation;
    }
    this.getSizeRom = function(){
        return this.sizeRom + sizeDesignation;
    }
};

function Ultrabook(name, model, serialNumber, yearManufacture){
    Laptop.call(this);
    this.setWeight = function(weight){
        if (weight > 1.5)
            throw "Weight ultrabook should not exceed 1,5kg!";
        this.weight = weight;
    }
    this.getName = function(){
        return this.name;
    }
    this.getYearManufacture = function(){
        return this.yearManufacture + " year";
    }
};

/* Example laptop url: https://catalog.onliner.by/notebook/acer/nhq53er01g */
var laptopAcer = new Laptop('Acer', 'Predator Helios 300 PH315-52-55FN NH.Q53ER.01G', 'NH.Q53ER.01G', 2019, 8, 512, false, 2.5);
console.log("Name laptop: " + laptopAcer.name);
console.log("Model laptop: " + laptopAcer.model);
console.log("Serial number laptop: " + laptopAcer.serialNumber);
console.log("Year manufacture laptop: " + laptopAcer.yearManufacture);
console.log("Optical drive: " + (laptopAcer.odd ? 'there is' : 'no'));
console.log("Weight laptop: " + laptopAcer.weight + " kg");
console.log("Size RAM: " + laptopAcer.getSizeRam());
console.log("Size ROM: " + laptopAcer.getSizeRom());

/* Example ultrabook url: https://catalog.onliner.by/notebook/xiaomi/jyu4051cn */
var ultrabook = new Ultrabook('Xiaomi', 'Notebook Air 13.3', 'JYU4051CN', 2018);
var weightUltrabook = prompt("Input weight ultrabook = ", 1.8);
ultrabook.setWeight(weightUltrabook); 
console.log("");
console.log("Name ultrabook: " + ultrabook.getName());
console.log("Model ultrabook: " + ultrabook.model);
console.log("Serial number ultrabook: " + ultrabook.serialNumber);
console.log("Year manufacture ultrabook: " + ultrabook.getYearManufacture());
console.log("Weight ultrabook: " + ultrabook.weight + " kg");
