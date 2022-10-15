const routes=function(app){
    app.route('/contact')
        .get(function(req,res,next){
            console.log("request from "+req.originalUrl);
            console.log("request from "+req.method);
            next();
        },function(req,res,next){
            res.send('get request succesful')
        
        })
        .post(function(req,res){
            res.send('post request succesful')
        });
        
        app.route('/contact/:contactId')
        .put(function(req,res){
            res.send('put request succesful')
        })
        .delete(function(req,res){
            res.send('delete request succesful')
        });

}

export default routes;