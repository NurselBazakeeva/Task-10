// task 2
class Cars {
    constructor(brand, year, power, color){
        this.brand = brand;
        this.year = year;
        this.power = power;
        this.color = color;
    }
    showInfo(){
        return `
        Марка: ${this.brand};
        Год выпуска: ${this.year};
        Мощность двигателя: ${this.power};
        Цвет: ${this.color}`;
    }
}

class ElectroCars extends Cars {
    constructor(brand, year, power, color, battery){
        super(brand, year, power, color);
        this.battery = battery;
    }
    showInfo(){
        return `
        Марка: ${this.brand};
        Год выпуска: ${this.year};
        Мощность двигателя: ${this.power};
        Цвет машины: ${this.color}
        Объем аккумулятора: ${this.battery}`;
    }
    promote(){
      return `${this.brand} Сконструировано так, как ни одна машина в мире.`;
  }
}
const Mazda = new Cars('Mazda', '2003', '150', 'Красный');
const electrocars = new ElectroCars('Toyota bZ4X', '2022', '204', 'Небесно голубой', '265');  
console.log(Mazda.showInfo());
console.log(electrocars.showInfo());
console.log(electrocars.promote());
