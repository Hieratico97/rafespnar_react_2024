const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const nameargv = process.argv[3]
const numberargv = process.argv[4]

const url =
  `mongodb+srv://rafalive98:${password}@cluster0.mfagaed.mongodb.net/noteApp?
  retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  name: String,
  number: String,
})

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