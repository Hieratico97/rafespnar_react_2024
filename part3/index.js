require('dotenv').config()
const express = require('express')

const morgan = require('morgan')

const mongoose = require('mongoose')



const Person = require('./models/person')
const app = express()
const cors = require('cors')
const person = require('./models/person')

app.use(morgan('tiny'))  
app.use(morgan(':method  :url  :status :res[content-length]- :response-time ms :content'))
app.use(express.static('dist'))
app.use(cors())
app.use(express.json())
morgan.token('content', (request, response) => {
  if (request.method === 'POST') {
    return JSON.stringify(request.body)
  } 
  return ''
})





app.get('/api/persons', (request, response) => { 
  Person.find({}).then(persons => {
    response.json(persons)
  })
})
app.get('/info', (request, response) => {
  Person.find({}).then(persons => {
  const maxId = person.length > 0
  ? Math.max(...Person.map(n => n.id)) 
  : 0
  const requestTime = new Date().toLocaleString()
  response.send(`
  <p>Persons ${maxId}</p>
  <p>${requestTime}</p>
  `

  )
})
})
app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(person => {
    response.json(person)
  })
})
app.delete('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(person => {
    response.json(person)
  })
})

const generateId = () => {
  const maxId = person.length > 0
    ? Math.max(...person.map(n => n.id))
    : 0
  return maxId + 1
}
app.post('/api/persons', (request, response) => {
  const body = request.body

  if (body.content === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }
  


  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }

  person.save().then(savedPerson => {
    response.json(savedPerson)
  })

})
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
