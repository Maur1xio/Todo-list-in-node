require("colors");


const { selectOptions } = require("./helpers/selectOptions.js");
const {starMessages} = require("./helpers/messages.js");
const { addTask } = require("./helpers/addTask.js");
const { pause } = require("./helpers/pause.js");
const { dataBaseTask } = require("./data/databaseTask.js");
const { seeTask } = require("./helpers/seeTask.js");
const { deleteTask } = require("./helpers/deleteTask.js");
const { myConfirm } = require("./helpers/confirm.js");
const { saveData } = require("./helpers/handleData.js");
const { orderTask } = require("./helpers/orderTasks.js");
const { selectionIds } = require("./helpers/selectionIds.js");
const { renameDate } = require("./helpers/renameDate.js");

async function main(){



    let option = "";
        while(option != "0"){

            console.clear();  
            
            
            starMessages();

            let opt = await selectOptions();
            option = opt

                if(opt == "1"){

                    let des = await addTask();
                    dataBaseTask.addMyTaks(des);
                    await pause(`Presiona ${"ENTER".green} para volver`);

                }else if(opt == "2"){
                    seeTask(dataBaseTask.dataTask);
                    await pause(`Presiona ${"ENTER".green} para volver`);

                }else if(opt == "3"){

                    seeTask(orderTask()[1]);
                    await pause(`Presiona ${"ENTER".green} para volver`);

                }else if(opt == "4"){
                    seeTask(orderTask()[0]);
                    await pause(`Presiona ${"ENTER".green} para volver`);

                }else if(opt == "5"){
                    let {ids} = await selectionIds();
                    renameDate(ids);
                    await pause(`Presiona ${"ENTER".green} para volver`);
                }else if(opt == "6"){


                    let selectDelete = await deleteTask();

                        if(selectDelete != "0"){
                            let answer = await myConfirm();
                            if(answer){
                                dataBaseTask.deleteMyTask(selectDelete);
                                await pause(`Tarea eliminada, presiona ${"ENTER".green} para volver`);
                            }
                        }

                }


            saveData(dataBaseTask.dataTask);

        }

}






main();
