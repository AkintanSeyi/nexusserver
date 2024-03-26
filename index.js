const express = require('express')

const cors = require("cors")
const { FieldValue } = require('firebase-admin/firestore')
const app = express()
app.use(express.json());
const PORT =  5000;
const { db } = require('./firebase.js')






app.use(cors());




// Get all the data from the firebase database

app.get('/api/products', async (req, res) => {
    const peopleRef = db.collection('project2024').doc('JWnNMn8PUdzvbAl00wGw')
    const doc = await peopleRef.get()
    if (!doc.exists) {
        return res.sendStatus(400)
    }

    res.status(200).send(doc.data())
})

// Post the data to the firebase 

app.post('/api/products/post', async (req, res) => {
    const data = req.body
    
   const peopleRef = db.collection('project2024').doc('JWnNMn8PUdzvbAl00wGw')
   peopleRef.set(data)
 
  
 res.status(200).send("successfull")
})

/*
app.get('/api/categories', async (req, res) => {
    const peopleRef = db.collection('project2024').doc('JWnNMn8PUdzvbAl00wGw')
    const doc = await peopleRef.get()
    if (!doc.exists) {
        return res.sendStatus(400)
    }

    res.status(200).json(doc.data())
})
*/



app.listen(PORT, () => console.log(`Server has started on port: ${PORT}`))