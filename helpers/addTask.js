const { pause } = require("./pause");
const inquirer = require("inquirer");

const setDesc = [

    {
        type : "input",
        name : "myDesc",
        message : `Descripción: `
    }

]

async function addTask(){

    let {myDesc} = await inquirer.prompt(setDesc);
    

    return myDesc

}

module.exports  = {
    addTask
}