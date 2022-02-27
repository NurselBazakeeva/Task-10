// task 1
class Restaurant {
    constructor(name, cusineType, served) {
      this.name = name;
      this.cusineType = cusineType;
      this.served = 0;
    }
  
    showInfo() {
      return `${this.name} is a restaurant of ${this.cusineType} meal.`;
    }
  
    isOpen() {
      let currentHour = new Date().getHours();
      let currentDay = new Date().getDay();
  
      if (currentDay === 5 || currentDay === 0) {
        return `${this.name} is closed`;
      } else {
        if (currentHour > 9 && currentHour < 22) {
          return `${this.name} is open`;
        } else {
          return `${this.name} is closed`;
        }
      }
    }
  
    serve() {
      return this.served +=1;
    };
  
    setServed(){   
     return Math.floor(res);
    }
  
    showTotalServed(){
      return Math.floor(res + (this.serve() -1));
    }
  
  }
  
  const res = Number(prompt("Введите количество посетителей"));
  document.write("<h1>Переходим в консоль</h1>");
  const BeshBarmak = new Restaurant("Besh Barmak", "kyrgyz");
  
  console.log(BeshBarmak.showInfo());
  console.log(BeshBarmak.isOpen());
  
  console.log(BeshBarmak.serve());
  console.log(BeshBarmak.serve());
  console.log(BeshBarmak.setServed());
  console.log(BeshBarmak.showTotalServed());

  
  