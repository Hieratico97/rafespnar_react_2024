const mongoose = require('mongoose')
const Note = require('./models/note')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const nameargv = process.argv[3]
const numberargv = process.argv[4]


mongoose.set('strictQuery',false)

mongoose.connect(url)



const Person = mongoose.model('Person', noteSchema)

if (nameargv && numberargv){
const person = new Person({
  name: nameargv,
  number: numberargv,
})

person.save().then(result => {
  console.log(`added ${result.name} number ${result.number} to the phonebook`  ,)
  mongoose.connection.close()
})
} else if ( process.argv.length == 3) {
  console.log("phonebook:")
Person.find({}).then(result => {
  result.forEach(person => {
    
    console.log(`${person.name} ${person.number}`  )
  })
  mongoose.connection.close()
})
}