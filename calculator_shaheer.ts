#!/usr/bin/env node
import inquirer from 'inquirer'
import chalk from 'chalk'


const title:string="Basic Calculator"
console.log("\n\n\n")  
console.log(chalk.bgBlueBright("╔════════════════════════════════════╗\n║  7  |  8  |  9  |  /  |   C   |    ║\n║-----|-----|-----|-----|-------|    ║\n║  4  |  5  |  6  |  *  |  DEL  |    ║\n║-----|-----|-----|-----|-------|    ║\n║  1  |  2  |  3  |  -  |   +   |    ║\n║-----|-----|-----|-----|-------|    ║\n║  0  |  .  |  =  |     (     )      ║\n╚════════════════════════════════════╝"))
console.log("\n\n\n")  
console.log(chalk.blueBright("┳┓      ┓       ┓  ┓     ┏┓┓   ┓       "))
console.log(chalk.blueBright("┃┃┏┓┓┏┏┓┃┏┓┏┓┏┓┏┫  ┣┓┓┏  ┗┓┣┓┏┓┣┓┏┓┏┓┏┓"))
console.log(chalk.blueBright("┻┛┗ ┗┛┗ ┗┗┛┣┛┗ ┗┻  ┗┛┗┫  ┗┛┛┗┗┻┛┗┗ ┗ ┛ "))
console.log("\n\n\n")  


const blueStyle = chalk.bgCyanBright.bold;
const greenStyle = chalk.bgGreenBright;
const resStyle = chalk.bgGreenBright.bold.italic.underline


while(true)
{
    let input = await inquirer.prompt([{
        name:"firstNum",
        type:"number",
        message: blueStyle("Input your first Number:")
    },
    
    {
        name:"secondNum",
        type:"number",
        message:blueStyle("Input your second number: ")
    },
    
    {
        name:"operation",
        type:"list",
        message:greenStyle("What operation would you like to perform?"),
        choices:["+","-","*","/"]
    },
    
    
    ]);
    
    if(input.operation==="+")
    {
        console.log(chalk.blueBright(`You selected addition of your numbers: ${input.firstNum} and ${input.secondNum}`));
        console.log(resStyle(`Your result: ${input.firstNum} + ${input.secondNum}= ${resStyle(input.firstNum + input.secondNum)}`));
    }
    
    
    else if(input.operation==="-")
    {
        console.log(chalk.blueBright(`You selected subtraction of your numbers: ${input.firstNum} and ${input.secondNum}`));
        console.log(`\nYour result: ${input.firstNum} - ${input.secondNum} = ${resStyle(input.firstNum - input.secondNum)}.`);
    }
    
    else if(input.operation==="*")
    {
        console.log(chalk.blueBright(`You selected multiplication of your numbers: ${input.firstNum} and ${input.secondNum}\n`));
        console.log(`\nYour result: ${input.firstNum} × ${input.secondNum} = ${resStyle(input.firstNum * input.secondNum)}.`);
    }
    
    else if(input.operation==="/")
    {
        console.log(chalk.blueBright(`You selected addition of your numbers: ${input.firstNum} and ${input.secondNum}\n`));
        console.log(`\nYour result: ${input.firstNum} + ${input.secondNum}= ${resStyle(input.firstNum / input.secondNum)}.`);
    }
    
    
    let choice = await inquirer.prompt([{
        name:"userChoice",
        type:'confirm',
        message:"Want to start again?"
    }])

    if(choice.userChoice===true)
    {
        continue        
    }

    else if(choice.userChoice===false)
        {
            break
        }
}
 
