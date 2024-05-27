#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
console.log(chalk.bgBlue(`\n Welcome to Quiz \n`));
console.log(chalk.bgBlue.black(`\n Each question contain 10 marks \n`));
let marks = 0;
let userAnwser = await inquirer.prompt([
    {
        name: "q1",
        type: "list",
        message: "Typescript is the superSet of which of the following language?",
        choices: ["Python", "Java", "Node.js", "Javascript"]
    },
    {
        name: "q2",
        type: "list",
        message: "In typescript which operator is used for addition?",
        choices: ["*", "-", "/", "+"],
    },
    {
        name: "q3",
        type: "list",
        message: "In typescript which of the following is logical operator?",
        choices: ["%", "**", "&&", "--"]
    },
    {
        name: "q4",
        type: "list",
        message: "Which company made typescript",
        choices: ["Google", "Microsoft", "Opera", "Andriod"]
    },
    {
        name: "q5",
        type: "list",
        message: "Typescript is",
        choices: ["statically typed language", "dynamically typed language", "All of the above", "None"]
    }
]);
let { q1, q2, q3, q4, q5 } = userAnwser;
if (q1 === "Javascript")
    marks += 10;
if (q2 === "+")
    marks += 10;
if (q3 === "&&")
    marks += 10;
if (q4 === "Microsoft")
    marks += 10;
if (q5 === "statically typed language")
    marks += 10;
function totalMarks() {
    if (marks == 50) {
        console.log(chalk.bgBlue(`Congrulation you got full ${marks} marks`));
    }
    else if (marks > 0) {
        console.log(chalk.bgBlue(`You total marks ${marks} out of 50`));
    }
    else {
        console.log(chalk.bgBlue(`You are fail`));
    }
}
;
totalMarks();
