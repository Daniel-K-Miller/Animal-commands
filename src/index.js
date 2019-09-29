import style from './styles.scss';

setTimeout(() => console.log("hiyas"), 100);

class Animal {
  constructor({ name, color, age, gender, legs, arms, habitat }) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.gender = gender;
    this.legs = legs;
    this.arms = arms;
    this.habitat = habitat;
    this.posessive = this.gender === "male" ? "his" : this.gender === "female" ? "her" : "its";
  }
  state = {
    awake: true
  }
  born() {
    console.log(`${this.name} is born!`)
  }
  sleeps() {
    if (this.state.awake) {
      this.state.awake = false;
      test.innerHTML = `${this.name} falls asleep.`
    } else {
      this.state.awake = false;
      test.innerHTML = `${this.name} is already asleep.`
    }
  }
  wakes() {
    if (this.state.awake) {
      test.innerHTML = `${this.name} is already awake.`
    } else {
      this.state.awake = true;
      test.innerHTML = `${this.name} wakes up.`
    }
  }
  eats() {
    console.log(`${this.name} eats.`)
  }
  cries() {
    console.log(`${this.name} cries!`)
  }
}

class Wolf extends Animal {
  constructor(name, color, age, posessive) {
    super(name, color, age, posessive)
  }
  howl() {
    console.log(`${this.name} howls!`)
  }
  plays() {
    console.log(`${this.name} plays with the pack.`)
  }
  stalk() {
    console.log(`${this.name} stalks ${this.posessive} prey.`)
  }
}

const fluffy = new Wolf({ name: "Fluffy", color: "white", age: 3, gender: "male" });

// 
document.getElementById("sleep").onclick = () => fluffy.sleeps();
document.getElementById("wakes").onclick = () => fluffy.wakes();
const test = document.getElementById("state");

