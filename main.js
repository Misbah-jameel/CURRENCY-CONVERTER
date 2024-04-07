#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n\t<==========WELCOME TO MY CURRENCY CONVERTER-BY- MISBAH-JAMEEL============>\n"));
//Define the list of currencies and their exchanges rates 
const currency = {
    USD: "1", //based currencies||||||| UNITED STATE DOLLAR
    EUR: "0.91", ///European currency(Euro)
    JYP: "113", ///japanese currency (yen)
    CAD: "1.3", ///canadian Dollar 
    AUD: "1.65", //Australian Dollar
    GBP: "0.76", //British Pound
    INR: "74.57", //Indian Rupee
    PKR: "277.70", // Pakistani Rupees
};
// async function convertCurrency() {
//   let currencies = ['USD', 'EUR', 'JYP', 'CAD', 'AUD', 'GBP', 'INR', 'PKR'];
//   let currentIndex = 0;}
//prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: chalk.green.bold("Enter from currency:"),
        type: "list",
        choices: ['USD', 'EUR', 'JYP', 'CAD', 'AUD', 'GBP', 'INR', 'PKR']
    },
    {
        name: "to",
        message: chalk.magenta.bold("Enter from currency:"),
        type: "list",
        choices: ['USD', 'EUR', 'JYP', 'CAD', 'AUD', 'GBP', 'INR', 'PKR']
    },
    {
        name: "amount",
        message: chalk.magenta.bold("Enter your amount:"),
        type: " number",
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(`converted Amount ${convertedAmount.toFixed(2)}`);
