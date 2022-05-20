let y=true
function x(){
    return new Promise((resolve,reject)=>{
    if(y){
        resolve("Hi");
    }
    else{
        reject("Error");
    }
})}

x().then((e)=>{
    console.log(e);
})
x().catch((e)=>{
    console.log(e)
})