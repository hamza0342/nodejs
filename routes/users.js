import express from "express";
import { v4 as uuidv4 } from 'uuid'


const router = express.Router();

let users = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 25
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 30
    }
]

router.get('/', (req, res)=>{
    res.send(users)
})

router.post('/', (req, res) => {
    const userID = uuidv4()
    const user =  req.body  

    const userWithID = {...user, id: userID}
    users.push(userWithID)
    
    res.send(`user with the first name ${req.body.firstName}, last name ${req.body.lastName} and age ${req.body.age} has been added
    
    
    `)
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    const foundUser = users.find(user => user.id === id)
    res.send(`Name of the found user is :${foundUser.firstName} ${foundUser.lastName}. He is of ${foundUser.age} years old`)
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
    users = users.filter(user => user.id != id)
    res.send(`Deleted user id is ${id}`)
})

router.patch('/:id', (req, res) => {
    const {id} = req.params
    const {firstName, lastName, age} = req.body
    const user = users.find(user => user.id == id)
    if(firstName){
        user.firstName = firstName
    }
    if(lastName){
        user.lastName = lastName
    }
    if(user.age){
        user.age = age 
    }
    res.send(`user with id ${id} has been updated`)
    res.send(`${id} user has been updated. The new data of the user is ${firstName}, ${lastName}, and ${age}`)

    })


export default router;