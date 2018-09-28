const {MongoClient,ObjectID} = require('mongodb');
const dbName = 'TodoApp';
MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser: true},(err,client)=>{
	const db= client.db(dbName);
	if(err){
		return console.log("unable to connect");
	}
	console.log("connected successfully");

	db.collection('Todos').find({completed:true}).toArray((err,result)=>{
		if(err) throw err;
		console.log(result);
		client.close();
	});
	
});