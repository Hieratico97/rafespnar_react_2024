const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

const mongoUrl = 'mongodb+srv://rafalive98:9q60vygNktKvaLyO@cluster0.mfagaed.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(mongoUrl)

app.use(cors())
app.use(express.json())

app.get('/api/blogs', (request, response) => {
  
  Blog
    .find({})
    .then(blogs => {
      
      response.json(blogs)
      
     
}).catch(error => {
  console.error('Error fetching blogs:', error.message)
  response.status(500).json({ error: 'Internal server error' })
})  
    })
    

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)
  console.log("hola")
  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
    console.log(response)
})

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})