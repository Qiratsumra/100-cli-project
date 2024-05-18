#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"

console.log(chalk.bgWhite.bold.green(`\n Welcome to cli based table generator \n`));


let table  = true ;
 while (table){
    let userInput  =  await inquirer.prompt(
        [
            {
                name:"TableNumber",
                type:"number",
                message:"Enter your number do you want to get table:"
            }
        ]
    );
    let userNumber = userInput.TableNumber;
    if(userNumber){
        console.log(`Here is the table of ${userNumber}`);
        for (let i = 1; i < 10; i++) {
            console.log(chalk.bgBlack.bold.red(`${userNumber} X ${i} = ${userNumber * i}`));
        }
        let againTable = await inquirer.prompt([{
            name:"AnotherTable",
            type:"confirm",
            message:"Do you want another table",
            default:false
        
        }])
        if(againTable.AnotherTable == false){
            table = false;
            console.log(chalk.bgWhite.bold.green(`\n Thanks for using my cli based table generator\n`));
        }
    }else {
        console.log(chalk.bgWhite.bold.green(`enter your input in table`));
        
    }
 }






























