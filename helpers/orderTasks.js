const { dataBaseTask } = require("../data/databaseTask")

function orderTask(){

    let data = dataBaseTask.dataTask;
    let dataNoCompleted = {};
    let dataCompleted = {};
        for(let x in data){
            if(data[x].dateComplete === null){
                dataNoCompleted[x] = data[x];
            }else{
                dataCompleted[x] = data[x];
            }
        }
    return [dataNoCompleted, dataCompleted];

}


module.exports = {
    orderTask
}