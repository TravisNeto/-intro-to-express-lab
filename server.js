const express = require('express')
const app = express()
const username = 'Travis'
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }  
];




// Task: Create a route that responds to URLs like /greetings/<username-parameter>.

app.get('/greetings/username', (req, res) => {
    res.send(`Hello there, ${username}`)
})

// Task: Set up a route to handle URLs following the pattern /roll/<number-parameter>.

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

// Task: Create a route for URLs like /collectibles/<index-parameter>.

app.get('/collectibles/:index', (req, res) => {
    const index = req.params.index;
    const collectible = collectibles[index];

    if (!collectible) {
        res.send('This item is not yet in stock. Check back soon!');
    }
        const response = `So, you want the ${collectible.name}? For ${collectible.price}, it can be yours!`;
        res.send(response);
})

// Task: Create a route /shoes that filters the list of shoes based on query parameters.

app.get('/shoes', (req, res) => {
    let filteredShoes = shoes;
  
    if (req.query['min-price']) {
      const minPrice = parseFloat(req.query['min-price']);
      filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice);
    }
  
    if (req.query['max-price']) {
      const maxPrice = parseFloat(req.query['max-price']);
      filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice);
    }
  
    if (req.query.type) {
      const type = req.query.type;
      filteredShoes = filteredShoes.filter(shoe => shoe.type === type);
    }
  
    res.json(filteredShoes);
  });
  
/// I really needed to look number 4 up on Google because I couldn't figure it out



app.listen(3000, () => {
    console.log('i am listening')
})

