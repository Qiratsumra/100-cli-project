#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgRed.whiteBright(`\n Welcome to the Contact App!`));
let Contact = [];
let contactSerialNumber = 1;
async function contactMenu() {
    let contactList = await inquirer.prompt([
        {
            name: "ListDetails",
            type: "list",
            message: "Select the option",
            choices: ['Add Contact Number', 'View Contact', 'Close Menu']
        }
    ]);
    let { ListDetails } = contactList;
    if (contactList.ListDetails === "Add Contact Number") {
        addContact();
    }
    else if (contactList.ListDetails === "View Contact") {
        viewContact();
    }
    else if (contactList.ListDetails === "Close Menu") {
        console.log(chalk.bgBlue(`\n Thanks for using`));
    }
    else {
        console.log(chalk.bgBlue(`\n Try again`));
    }
}
;
contactMenu();
async function addContact() {
    let addDetails = await inquirer.prompt([
        {
            name: "saveName",
            type: "input",
            message: "Enter your name"
        },
        {
            name: "saveNumber",
            type: "number",
            message: 'Enter your number'
        }
    ]);
    let { saveName, saveNumber } = addDetails;
    Contact.push({ ID: contactSerialNumber++, name: saveName, phoneNumber: saveNumber });
    console.log(chalk.bgBlue(`\n Your Contact number is save\n`));
    contactMenu();
}
async function viewContact() {
    if (Contact.length > 0) {
        Contact.filter((userInput) => console.log(chalk.bgBlue(`\n ${userInput.ID}: ${userInput.name} ----------- ${userInput.phoneNumber}`)));
    }
    else {
        chalk.bgBlue(`\n No Contact Number is Add`);
    }
}
;
