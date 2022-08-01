const express = require("express");
const Register = require("./models/registers");
const app = express();
app.use(express.json())
require("./db/conn");

const port = process.env.PORT || 3000;
app.use(express.json());

app.get("/", async (req, res)=>{
    try {
        const RegisterData = await Register.find();
        return res.status(200).send(RegisterData);
    } catch (error) {
        // console.log('called');
        return res.status(500).send({message: error.message});
    }
});

// create a new user in our database
app.post("/register", async (req, res) =>{
    try {
        
        const registerEmployee = new Register({
                firstname: req.body.firstname,
                middlename: req.body.middlename,
                lastname:req.body.lastname,
                gender:req.body.gender,
                email:req.body.email,
                phone:req.body.phone,
                address: req.body.address 
        })

        console.log("the success part" + registerEmployee);
        const registered = await registerEmployee.save();
        console.log("the page part" + registered);
        res.status(201).send(registered);
    } catch (error) {
        res.status(400).send(error);
        console.log("the error part page ");
    }
})
//delete
app.delete('/:id', async (req, res)=>{
    try {
        const {id} = req.params;
        await Register.findByIdAndDelete(id);
        return res.status(200).send({message: 'User deleted'});
        
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
})


//Update

app.patch('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const body = req.body;
        const updatedUser = await Register.findByIdAndUpdate(id, body);
        return res.status(200).send({message: 'User updated'});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
})

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})

