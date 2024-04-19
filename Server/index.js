const express = require("express");
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require("cors");
const DonateModel = require('./models/donate.model')
const VolunteerModel = require('./models/volunteer.model')


const app = express()
app.use(express.json())
app.use(cors())

// const uri = "mongodb+srv://Gaurav122000:123456atlas@cluster0.haddn82.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

const db = "mongodb+srv://Gaurav122000:123456atlas@cluster0.haddn82.mongodb.net/Ngo_Site?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(db).then(() => {
    console.log('Connected to DB ..... :)');
}).catch((err) => {
    console.log(err, 'Not Connected to DB ...... :(');
});


// mongoose.connect("mongodb://127.0.0.1:27017/NGO_Site_2").then(() => {
//     console.log('Connected to DB ..... :)');
// }).catch((err) => {
//     console.log(err, 'Not Connected to DB ...... :(');
// });

app.post('/donation-form', (req, res) => {
    //console.log(req.body);
    const donateData = req.body;
    DonateModel.create(donateData)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.post('/volunteer-form' , (req,res)=>{
    const volunteerData = req.body; 
    console.log(volunteerData)
    VolunteerModel.create(volunteerData)
    .then(volunteer => res.json(volunteer))
    .catch(err => res.json(err))
})

app.listen(3001, ()=> {
    console.log("Server is Running....... :) Yeah Buddy")
})