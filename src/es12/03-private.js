class user {
    constructor(name) {
      this.name = name;
    }
    //metodos
    speak(){
      return 'Hello';
    }
    greeting(){
      return `${this.speak()} ${this.name}`;
    }
  }
  
  const ana = new user('Ana')
  console.log(ana.greeting())
  
  //setters getters
  
  class user {
    constructor(name, age) {
      this.name = name,
      this.age = age;
    }
    // metodos
    #speak(){
      return 'Hello';
    }
    greeting(){
      return `${this.speak} ${this.name}`;
    }
    get #uAge(){
      return this.age;
    }
    set #uAge(n){
      this.age = n;
    }
  }
  
  const bebeloper1 = new user('David', 15);
  console.log(bebeloper1.uAge);
  console.log(bebeloper1.uAge = 20);
  
  