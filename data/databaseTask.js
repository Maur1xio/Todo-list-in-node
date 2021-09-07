const { readData } = require("../helpers/handleData");
const Task = require("./generatorTask");


class dataTask{
    constructor(){
        this.dataTask = {

        }
    }

    addMyTaks = function(des){
        let newTaks = new Task(des);
        this.dataTask[newTaks.id] = newTaks;
    }

    deleteMyTask = function(des){
        delete this.dataTask[des];
    }

}


let dataBaseTask = new dataTask;

dataBaseTask.dataTask = readData();


module.exports  = {
    dataBaseTask
}