const fs= require("fs");

console.log("Start!!");

fs.readFile("./f1.txt",function(err,data){
    console.log(data+"");
    fs.readFile("./f2.txt",function(err,data){
        console.log(data+"");
    fs.readFile("./f3.txt",function(err,data){
            console.log(data+"");
})
    })
})