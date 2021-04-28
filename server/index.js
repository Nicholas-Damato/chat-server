const express = require('express')

const mc = require('./controllers/messages_controller')

const app = express();

const PORT = 3001;
app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

app.get('/api/messages', mc.read)
app.post('/api/messages', mc.create)
app.delete('/api/messages/:id', mc.delete)
app.put('/api/messages/:id', mc.update)

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
