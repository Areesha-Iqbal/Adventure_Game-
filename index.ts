import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellow.italic("\n\tWelcome to _Areesha's Adventure Game 🎮 \n"));

class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
  fuelIncrease() {
    this, (this.fuel = 100);
  }
}
class Opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
}
let player = await inquirer.prompt([
  {
    name: "name",
    type: "input",
    message: chalk.blue.bold("Please Enter your Name: ✎"),
  },
]);
let opponent = await inquirer.prompt([
  {
    name: "select",
    type: "list",
    message: chalk.gray.bold("Select your Opponent  🧟‍♂️ "),
    choices: ["Zombie", "Skeleton", "Alien", "Human"],
  },
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
  if (opponent.select == "Zombie") {
    let ask = await inquirer.prompt([
      {
        name: "opt",
        type: "list",
        message: chalk.blue.bold("What would you like to do ❔ "),
        choices: ["Attack", "Drink Portion", "Run for your Life.."],
      },
    ]);
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (p1.fuel <= 0) {
          console.log(chalk.red.bold("Game Over ❌ Try Again"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (o1.fuel <= 0) {
          console.log(chalk.green.bold("You Win 🎉 "));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(chalk.magenta.bold(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
    }
    if (ask.opt == "Run for your Life..") {
      console.log(chalk.red.bold("Game Over ❌ Try Again"));
      process.exit();
    }
  }
  //Skeleton
  if (opponent.select == "Skeleton") {
    let ask = await inquirer.prompt([
      {
        name: "opt",
        type: "list",
        message: chalk.blue.bold("What would you like to do ❔ "),
        choices: ["Attack", "Drink Portion", "Run for your Life.."],
      },
    ]);
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (p1.fuel <= 0) {
          console.log(chalk.red.bold("Game Over ❌ Try Again"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (o1.fuel <= 0) {
          console.log(chalk.green.bold("You Win 🎉 "));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(chalk.magenta.bold(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
    }
    if (ask.opt == "Run for your Life..") {
      console.log(chalk.red.bold("Game Over ❌ Try Again"));
      process.exit();
    }
  }
  //Alien
  if (opponent.select == "Alien") {
    let ask = await inquirer.prompt([
      {
        name: "opt",
        type: "list",
        message: chalk.blue.bold("What would you like to do ❔ "),
        choices: ["Attack", "Drink Portion", "Run for your Life.."],
      },
    ]);
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (p1.fuel <= 0) {
          console.log(chalk.red.bold("Game Over ❌ Try Again"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (o1.fuel <= 0) {
          console.log(chalk.green.bold("You Win 🎉 "));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(chalk.magenta.bold(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
    }
    if (ask.opt == "Run for your Life..") {
      console.log(chalk.red.bold("Game Over ❌ Try Again"));
      process.exit();
    }
  }
  //Human
  if (opponent.select == "Human") {
    let ask = await inquirer.prompt([
      {
        name: "opt",
        type: "list",
        message: chalk.blue.bold("What would you like to do ❔ "),
        choices: ["Attack", "Drink Portion", "Run for your Life.."],
      },
    ]);
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (p1.fuel <= 0) {
          console.log(chalk.red.bold("Game Over ❌ Try Again"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (o1.fuel <= 0) {
          console.log(chalk.green.bold("You Win 🎉 "));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(chalk.magenta.bold(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
    }
    if (ask.opt == "Run for your Life..") {
      console.log(chalk.red.bold("Game Over ❌ Try Again"));
      process.exit();
    }
  }
} while (true);
