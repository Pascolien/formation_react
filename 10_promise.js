
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = () => {
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            reject
            console.log("reject");
        },2000)
        
        console.log("end promise");
        resolve
    })

};
sleep();
//console.log(sleep());
module.exports = {sleep};