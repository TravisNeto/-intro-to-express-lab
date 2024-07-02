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

app.get('/collectibles/:index', (req, res) => {
    const index = req.params.index;
    const collectible = collectibles[index];

    if (!collectible) {
        res.send('This item is not yet in stock. Check back soon!');
    }
        const response = `So, you want the ${collectible.name}? For ${collectible.price}, it can be yours!`;
        res.send(response);
})

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
      const type = req.query.type.toLowerCase();
      filteredShoes = filteredShoes.filter(shoe => shoe.type === type);
    }
  
    res.json(filteredShoes);
  });
  


app.listen(3000, () => {
    console.log('i am listening')
})

