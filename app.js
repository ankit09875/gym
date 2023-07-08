const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const port = 80;

app.use('/static', express.static('static'))
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'pug');
app.set('/static', path.join('views'));

app.get('/', (req, res) => {
    res.status(200).render('index.pug');
});
app.post('/', (req, res) => {
    // console.log(req.body)
     Name = req.body.Name
     Age = req.body.Age
     Gender = req.body.Gender
     Address = req.body.Address
     More = req.body.More

     let outputToWrite = `the name of the client is ${Name}, ${Age} years old, ${Gender}, residing at ${Address}. More about him/her: $ore}`
     fs.writeFileSync('output.txt', outputToWrite)
    const params = { 'message': 'your form has been submitted sucessfully' }
    res.status(200).render('index.pug', params);
});

app.listen(port, () => {
    console.log(`this server is running on port ${port}`);
});
