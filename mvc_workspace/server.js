const express = require("express");
const app = express();
const port = 3001;
const router = require("./router");
console.log(router);

app.set('views', __dirname+'/views');
app.set('view engine','ejs');

app.listen(port, function(error){
    if(error){
        console.log("error occured: ", error);
    }
    console.log("connected, port : ", port);
});

// 모듈화된 router를 호출하면서 Express app을 주입시킨다. 
router(app);