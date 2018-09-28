//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');//object distructuring

/*var user  ={name:'kushal',age:'20'};
var {name} = user;
console.log(name);// this will console kushal
creating a new variable from the object property is known as object distructuring
*/

const dbName= 'TodoApp';
MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true },(err,client) =>{
	const db = client.db(dbName);
	if(err){
		return console.log("unable to connect to mongodb server");
	}
	console.log("connected to mongodb server");
	db.collection('Todos').insertOne({
		text :'something to do',
		completed:false
		},(err,result)=>{
		if(err) throw err;
		console.log(JSON.stringify(result.ops, undefined, 2));
	});
	client.close();
});