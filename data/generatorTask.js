
const {v4} = require("uuid");

class Task{

    constructor(des){
        this.id = v4();
        this.des = des;
        this.dateComplete = null;
    }

}

module.exports = Task;