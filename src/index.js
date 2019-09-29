import style from "./styles.scss";

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
    this.posessive =
      this.gender === "male" ? "his" : this.gender === "female" ? "her" : "its";
  }
  props = {
    awake: true
  };
  born() {
    console.log(`${this.name} is born!`);
  }
  sleeps() {
    if (this.props.awake) {
      this.props.awake = false;
      sleepState.innerHTML = `${this.name} falls asleep.`;
      sleepState.className = "yellow-text";
    } else {
      sleepState.innerHTML = `${this.name} is already asleep.`;
      sleepState.className = "red-text";
    }
  }
  wakes() {
    if (this.props.awake) {
      sleepState.innerHTML = `${this.name} is already awake.`;
      sleepState.className = "red-text";
    } else {
      this.props.awake = true;
      sleepState.innerHTML = `${this.name} wakes up.`;
      sleepState.className = "green-text";
    }
  }
  eats() {
    console.log(`${this.name} eats.`);
  }
  cries() {
    console.log(`${this.name} cries!`);
  }
}

class Wolf extends Animal {
  constructor(name, color, age, posessive, props) {
    super(name, color, age, posessive, props);
  }
  state = {
    howling: false
  };
  howl() {
    if (this.props.awake && !this.state.howling) {
      this.state.howling = true;
      sleepState.innerHTML = `${this.name} howls.`;
      sleepState.className = "green-text";
    } else if (!this.props.awake) {
      sleepState.innerHTML = `${this.name} cannot howl while asleep.`;
      sleepState.className = "red-text";
    } else if (this.state.howling) {
      sleepState.innerHTML = `${this.name} is already howling!`;
      sleepState.className = "red-text";
    }
  }
  stopHowl() {
    if (this.state.howling) {
      this.state.howling = false;
      sleepState.innerHTML = `${this.name} stops howling.`;
      sleepState.className = "yellow-text";
    } else if (!this.state.howling && this.props.awake) {
      sleepState.innerHTML = `${this.name} is not currently howling.`;
      sleepState.className = "red-text";
    } else if (!this.props.awake) {
      sleepState.innerHTML = `${this.name} cannot stop howling as they are asleep!`;
      sleepState.className = "red-text";
    }
  }
  stalk() {
    console.log(`${this.name} stalks ${this.posessive} prey.`);
  }
}

const fluffy = new Wolf({
  name: "Fluffy",
  color: "white",
  age: 3,
  gender: "male"
});

//
document.getElementById("sleep").onclick = () => fluffy.sleeps();
document.getElementById("wakes").onclick = () => fluffy.wakes();
document.getElementById("howl").onclick = () => fluffy.howl();
document.getElementById("stop-howling").onclick = () => fluffy.stopHowl();
const sleepState = document.getElementsByClassName("state")[0];
