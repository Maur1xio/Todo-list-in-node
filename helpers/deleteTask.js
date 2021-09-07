
const inquirer = require("inquirer");
const { dataBaseTask } = require("../data/databaseTask");


async function deleteTask(){
    let n = 0;
    const choices = [{
        value:  "0",
        name : "0. Cancelar"
    }];

    for(let x in dataBaseTask.dataTask){

        n+=1;
        let myTask = {
                value:dataBaseTask.dataTask[x].id,
                name :`${n}. ${dataBaseTask.dataTask[x].des}`
        }

        choices.push(myTask);
    };

    const options = [
        {
            type : "list",
            name : "opt",
            message : "Borrar",
            choices : choices
        }
    ];

    let {opt} = await inquirer.prompt(options);
    return opt;


}


module.exports ={
    deleteTask
}