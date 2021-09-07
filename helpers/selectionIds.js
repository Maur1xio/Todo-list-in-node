const inquirer = require("inquirer");
const { dataBaseTask } = require("../data/databaseTask");




async function selectionIds(){
    let data =  dataBaseTask.dataTask;
    let choices = [];
    let n = 0;
    for(let x in data){
        n+=1;
        let object = {
            value: data[x].id,
            name :`${n}. ${data[x].des}`,
            checked : data[x].dateComplete === null ? false : true
        }
        choices.push(object);
    }

    const options = [
        {
            type : "checkbox",
            name : "ids",
            message : "Seleccione",
            choices 
        }
    ]
    let ids = await inquirer.prompt(options);
    return ids;
}


module.exports = {
    selectionIds
}