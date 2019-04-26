const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log("unable to connect to mongodbserver");
    }
    console.log("connected to mongodb server");
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5cbd904e22bddf2af088c7a7')
    },{
        $set:{
            completed: true
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    })
//db.close();
});
