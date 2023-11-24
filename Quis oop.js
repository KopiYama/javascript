// 1. Definisi class Animal
class Animal {
    constructor(name, age, isMammal) {
      this.name = name;
      this.age = age;
      this.isMammal = isMammal;
    }
  }
  
  // 2. Definisi class Rabbit yang merupakan turunan dari Animal
  class Rabbit extends Animal {
    constructor(name, age) {
      super(name, age, true); // Rabbit selalu merupakan mammal, sehingga isMammal diset true
    }
  
    eat() {
      return `${this.name} sedang makan!`;
    }
  }
  
  // 3. Definisi class Eagle yang merupakan turunan dari Animal
  class Eagle extends Animal {
    constructor(name, age) {
      super(name, age, false); // Eagle bukanlah mammal, sehingga isMammal diset false
    }
  
    fly() {
      return `${this.name} sedang terbang!`;
    }
  }
  
  // 4. Instansiasi Rabbit
  let myRabbit = new Rabbit("Labi", 2);
  
  // 5. Instansiasi Eagle
  let myEagle = new Eagle("Elo", 4);
  
  // Contoh penggunaan method eat pada Rabbit
  console.log(myRabbit.eat()); // Output: Labi sedang makan!
  
  // Contoh penggunaan method fly pada Eagle
  console.log(myEagle.fly()); // Output: Elo sedang terbang!
  