
import axios from 'axios'
import { useState, useEffect } from 'react'
import noteService from './services/modulo'
import modulo from './services/modulo'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newButtonDel, setButtonDel] = useState('')
  const [search, setSearch] = useState('')
  useEffect(() => {
    console.log('effect')
    modulo
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const addPersons = event => {
    event.preventDefault()
    const exPerson = persons.find(person => person.name === newName)
    if (exPerson){
      const UpdatedNumber = {...exPerson, number : newNumber}
      modulo
        .update(exPerson.id, UpdatedNumber)
        .then(response => {
          console.log(response)
          setPersons(persons.map(person =>
            person.id !== exPerson.id ? person : response.data
          ));
          setNewName('')
        setNewNumber('')
        })
      }else{



    
      
    
   
    const personObject = {
      name: newName,
      number: newNumber
      
    }
  
    modulo
      .create(personObject)
      .then(response => {
        console.log(response)
        setPersons(persons.concat(response.data))
        
        setNewName('')
        setNewNumber('')
      })
    }

  }
  const handleDelete = id => {
    const url = `http://localhost:3001/persons/${id}`
    if (window.confirm("delete?")) {
    axios
      .delete(url)
      .then(response => {
        console.log(response)
        setPersons(persons.filter(person => person.id !== id))
      })
    }
     
  }
    const handleNameChange = (event) => {
      console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleSearch = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }
 
    
   
    
   
  const filteredSearch = persons.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
)

  return (
    <div>
      
      <h2>Phonebook</h2>
      <div>
      filter show with <input value={search} onChange={handleSearch}/>
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addPersons}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
          number: <input value={newNumber} onChange={handleNumberChange}/>
         
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredSearch.map((person,index) => 
          <li key={index}>
          {person.name} {person.number}
          <button onClick={() => handleDelete(person.id)}>Delete</button>
          </li>
        )}


      </ul>
    </div>
  )
}


export default App