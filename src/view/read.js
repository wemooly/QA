const fs = require("fs")

const file ={}

fs.readFile("./data.txt",'utf-8',(err,data)=>{
    console.log(data);
    
})

// export {
//     file  
// }