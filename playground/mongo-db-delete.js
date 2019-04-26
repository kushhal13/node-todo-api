//const MongoClient = require('mogodb').MongoClient;
const MongoClient = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log("unable to connect to mongo server");
    }
    console.log("connected to mongodb server");

    //delete many
    /*db.collection('Todos').deleteMany({text:"eat lunch"}).then((result)=>{
        console.log(result);
    })*/
    
    //deletOne
    //db.collection('Todos').deleteOne({text:"bindaash" }).then((result)=>{
      //  console.log(result);
    //})

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed:true}).then((result)=>{
        console.log(result);
    });
    //db.close();
});