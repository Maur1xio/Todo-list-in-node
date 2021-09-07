const { dataBaseTask } = require("../data/databaseTask")

function renameDate(arrayIds){

    let data = dataBaseTask.dataTask;
    for(let x in data){
        data[x].dateComplete = null;
    }

    for(let x of arrayIds){
        data[x].dateComplete = "Completado";
    }

}

module.exports = {
    renameDate
}