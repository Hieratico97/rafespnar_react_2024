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
app.use(express.static('build'))
app.use(express.json())

morgan.token('content', (request, response) => {
  if (request.method === 'POST') {
    return JSON.stringify(request.body)
  } 
  return ''
})
const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

// este debe ser el último middleware cargado, ¡también todas las rutas deben ser registrada antes que esto!
app.use(errorHandler)




app.get('/api/persons', (request, response) => { 
  Person.find({}).then(persons => {
    response.json(persons)
  })
})
app.get('/info', (request, response) => {
  Person.find({}).then(persons => {
  const maxId = persons.length > 0
  ? Math.max(...persons.map(n => n.id)) 
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
  Person.findById(request.params.id).then(person =>{
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })
  .catch(error => next(error))
})


app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({ error: 'content missing' })
  } 
  


  const newPerson = new Person ({
    name: body.name,
    number: body.number,
    
  })

  newPerson.save().then(savedPerson => {
    response.json(savedPerson)
  })

})
app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
