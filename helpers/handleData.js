
const fs = require("fs");
const file = "./db/myData.json"


function saveData(data){

    fs.writeFileSync(file,JSON.stringify(data));
}

function readData(){

    if(!fs.existsSync(file)){
        return {};
    }else{
        let myData = fs.readFileSync(file, {encoding:"utf-8"});
        myData = JSON.parse(myData);
        return myData;
    }

}






module.exports = {
    saveData,
    readData
}