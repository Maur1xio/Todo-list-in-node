const inquirer = require("inquirer");


async function pause(myMessage){
    
    const optPause = [

        {
            type : "input",
            name : "nah",
            message : myMessage ? myMessage : `Presiona ${"ENTER".green} para continuar` 
        }

    ]

    await inquirer.prompt(optPause);


}


module.exports = {
    pause 
};