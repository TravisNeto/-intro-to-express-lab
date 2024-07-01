const express = require('express')
const app = express()
const username = 'Travis'

// Task: Create a route that responds to URLs like /greetings/<username-parameter>.

app.get('/greetings/username', (req, res) => {
    res.send(`Hello there, ${username}`)
})

app.get('/roll/:number', (req, res) => {
    const number = req.params.number

    if (isNaN(number)) {
        res.send('You must specify a number')         
    } 
    else {
        const maxNumber = parseInt(number);

        const roll = Math.floor(Math.random() * (maxNumber + 1))
        res.send(`You rolled a ${roll}.`)
    }
})















app.listen(3000, () => {
    console.log('i am listening')
})

