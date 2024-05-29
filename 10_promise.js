
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = () => {
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            resolve("success")
            console.log("success");
        },2000)        
        console.log("end promise");         
    })

};
sleep();
//console.log(sleep());
module.exports = {sleep};