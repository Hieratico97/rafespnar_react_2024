const express = require('express')
const app = express()
const morgan = require('morgan')
app.use(morgan('tiny'))
morgan.token('content', (request, response) => {
  if (request.method === 'POST') {
    return JSON.stringify(request.body)
  } 
  return ''
})
app.use(morgan(':method  :url  :status :res[content-length]- :response-time ms :content'))
let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

app.use(express.json())



app.get('/api/persons', (request, response) => { 
  response.json(persons)
})
app.get('/info', (request, response) => {
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
app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(note => note.id === id)
  
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})
app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(persons => persons.id !== id)

  response.status(204).end()
})

const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0
  return maxId + 1
}
app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }
  if (persons.find(person=>body.name ===person.name)){
    return response.status(400).json({ 
      error: 'duplicated' 
  }
)}

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }

  persons = persons.concat(person)

  response.json(person)
})
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})