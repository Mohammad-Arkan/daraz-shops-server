const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000

//middleware
//Daraz-shops
//wJH5SIejYWEC9HSH


const uri = "mongodb+srv://Daraz-shops:wJH5SIejYWEC9HSH@cluster0.o8biysy.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

app.post('/products', async(req, res)=> {
    const newProduct = req.body;
    console.log(newProduct)
})


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);





app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('DARAZ SHOP IS RUNNING')
})
app.listen(port,()=> {
    console.log(`DARAZ SHOP is running on port, ${port}`)
})