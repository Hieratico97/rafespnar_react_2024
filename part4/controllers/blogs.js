const express = require('express')
const Blog = require('../controllers/blog')

const blogsRouter = express.Router()

// Obtener todos los blogs
blogsRouter.get('/', async (request, response) => {
    Blog
      .find({})
      .then(blogs => {
        response.json(blogs)
      })
  })

// Crear un nuevo blog
blogsRouter.post('/',  (request, response) => {
    const blog = new Blog(request.body)
  
    blog
      .save()
      .then(result => {
        response.status(201).json(result)
      })
  })


module.exports = blogsRouter
