require('dotenv').config()

const { json } = require('express')
const express = require('express')
const app = express()
const port = process.env.PORT

const middleware = require('./utilities/middileware')

app.use(express.json())
app.use(middleware.requsetLogger)

const URI = 'process.env.MANDODB_URL'

let users =[
  {
    id: 1,
    username: 'Baba Jallow',
    phone: '3852121',
    password: 'CHELsea'
  },
  {
    id: 2,
    username: 'Boubacarr Jallow',
    phone: '7852121',
    password: 'sea-123'
  },
]

app.get('/', (req, res) => {
  res.send('Barkery Factory Website')
})

app.get('/api/users', (req,res) => {
  res.json(users)
})

app.get('/api/users/:id',(req,res) => {
  const id = req.params.id
  const user = users.find((user) => user.id === Number(id)) 

  if(user) {
    res.json(user)}

    else{ res.status(404).end()}

  })

app.delete('/api/users/:id', (req,res) => {
  const id = req.params.id
  users = users.filter((user) => user.id !== Number(id))
  res.status(204).end()
})

app.post('/api/users',(req,res) => {
  const content = req.body
 console.log(content)
 res.json(content)
})
app.put('/api/users/:id',(req,res) => {
const id =req.params.id

res.id
  
})

app.use(middleware.unknownEndpoint)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

