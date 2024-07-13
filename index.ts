#! /usr/bin/env node

import inquirer from "inquirer"

const rendomNumber=Math.floor(Math.random()*10+1)

const answer = await inquirer.prompt([
    {
        name:"usernumber",
        type:"number",
        message:"Please guess a number"
    }
]);


if (answer.usernumber === rendomNumber) {
    console.log("congtratulation! you select right number");
    
} else {
    console.log("Oops! you select wrong number");
    
}
