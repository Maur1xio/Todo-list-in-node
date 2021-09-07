
function seeTask(dataForSee){
    let n = 0;
    let dataToPrint = "";
    let myData =  dataForSee;

    for(let x in myData){
        n += 1;
        let doneTask = "";
        let paintDoneTask = ""
        if(myData[x].dateComplete === null){
            doneTask = "Pendiente";
            paintDoneTask = "red";
        }else{
            doneTask = "Completada"
            paintDoneTask = "green"
        }
        dataToPrint += `${`${n}`.yellow} ${myData[x].des} :: ${`${doneTask}`[paintDoneTask]} \n`;


    }

    console.log(dataToPrint);

}

module.exports = {
    seeTask
}