#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgRed.whiteBright(`\n Welcome to Calculator`));
let condition = true;
while (condition) {
    let firstCalculation = await inquirer.prompt([
        {
            name: "firstNumber",
            type: "number",
            message: "Enter your first number:"
        },
        {
            name: "secondNumber",
            type: "number",
            message: "Enter your second number:"
        },
        {
            name: "operation",
            type: "list",
            message: "Select the one option",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        }
    ]);
    let { firstNumber, secondNumber, operation } = firstCalculation;
    if (operation === "Addition") {
        console.log(chalk.bgBlue.whiteBright(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`));
        condition = false;
    }
    else if (operation === "Subtraction") {
        console.log(chalk.bgBlue.whiteBright(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`));
        condition = false;
    }
    else if (operation === "Division") {
        console.log(chalk.bgBlue.whiteBright(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`));
        condition = false;
    }
    else if (operation === "Multiplication") {
        console.log(chalk.bgBlue.whiteBright(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`));
        condition = false;
    }
    else {
        console.log(chalk.bgBlue.whiteBright(`Enter valid data`));
    }
    let anotherCalculation = await inquirer.prompt([
        {
            name: "comfirmMessage",
            type: "confirm",
            message: "Do you want another calculation?",
            default: true
        }
    ]);
    let { comfirmMessage } = anotherCalculation;
    if (anotherCalculation.comfirmMessage === true) {
        let secondCalculation = await inquirer.prompt([
            {
                name: "thirdNumber",
                type: 'number',
                message: "Enter first number"
            },
            {
                name: "fourthNumber",
                type: "number",
                message: 'Enter sceond number'
            },
            {
                name: "operation2",
                type: "list",
                message: "Select the option",
                choices: ["Addition", "Subtraction", "Division", "Multiplication"]
            }
        ]);
        let { thirdNumber, fourthNumber, operation2 } = secondCalculation;
        if (operation2 === "Addition") {
            console.log(`${thirdNumber} + ${fourthNumber} = ${thirdNumber + fourthNumber}`);
            console.log(chalk.bgBlue.whiteBright(`\n Thanks for using \n`));
            condition = false;
        }
        else if (operation2 === "Subtraction") {
            console.log(`${thirdNumber} - ${fourthNumber} = ${thirdNumber - fourthNumber}`);
            console.log(chalk.bgBlue.whiteBright(` \n Thanks for using`));
            condition = false;
        }
        else if (operation2 === "Division") {
            console.log(`${thirdNumber} / ${fourthNumber} = ${thirdNumber / fourthNumber}`);
            console.log(chalk.bgBlue.whiteBright(` \n Thanks for using`));
            condition = false;
        }
        else if (operation2 === "Multiplication") {
            console.log(`${thirdNumber} * ${fourthNumber} = ${thirdNumber * fourthNumber}`);
            console.log(chalk.bgBlue.whiteBright(` \n Thanks for using`));
            condition = false;
        }
        else {
            console.log(`Enter Valid`);
            condition = false;
        }
    }
    else {
        console.log(chalk.bgBlue.whiteBright(`Thanks for using`));
        condition = false;
    }
}
;
