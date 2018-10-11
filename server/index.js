// require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const port = 3001

const {getMessages, addMessage, editMessage} = require('./controller')

const app = express();
app.use(bodyParser.json())

app.get('/api/messages', getMessages)
app.post('/api/add', addMessage)
app.put('/api/editmessage/:id', editMessage)


app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})