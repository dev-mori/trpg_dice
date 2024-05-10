const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://goto:8uIHTvuJEG2yLcZF@cluster0.fso5fc7.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const dbclient = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

module.exports = dbclient.db('trpg');
