#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";


console.log(chalk.bgWhiteBright.green(`\n Guest Verification Centre \n`));

let condition = true;

let guestList = ["Qirat","Saeed","Abari","Kinza","Sumra","Zaheer","Bisma","Unzela","Alexa","Ali"];

while (condition) {
    let userInput = await inquirer.prompt(
        [
            {
                name:"UserName",
                type:"input",
                message:"Enter your name :"
            }
        ]
    );

    let guestName = userInput.UserName;
    if (guestList.includes(guestName)) {
        console.log(chalk.bgGreenBright.red(`Welcome ${guestName}`));
        condition = false

    }else{
        console.log(chalk.bgWhiteBright.green(`Sorry ${guestName} your are not invited`));
        
        let askAgain = await inquirer.prompt([{
            type:"confirm",
            name:"otherName",
            message:"Do you have another name you go by? if so, we can check again!",
            default:false
        }])

        if (askAgain.otherName === false) {
            condition = false;
            console.log(chalk.bgWhiteBright.red(` We are apologize, but you are not on the guest list. Pleasecontact the event manager`));
            
        };
    }
    
}