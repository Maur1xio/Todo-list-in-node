
const inquirer = require("inquirer");

async function myConfirm(){

    let {selection} = await inquirer.prompt(
        [
            {
                type : "confirm",
                name : "selection",
                message : "¿Estás seguro de eliminar esa tarea?",
            }
        ]
    );

    return selection;

}


module.exports = {
    myConfirm
}