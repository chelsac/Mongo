import express from "express";
import routes from './src/routes/crmroutes'

const app =new express();
const PORT=4000;

routes(app);

app.get('/',function(req,res){
    res.send("node and express server is running at "+PORT);
});

app.listen(PORT,function(){
    console.log("server is running at "+PORT);
});
