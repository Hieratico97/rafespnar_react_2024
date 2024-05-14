import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
     number: '635888234'
  }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const addName = (event) => {
   
    
    event.preventDefault()
    
    if(nameExists(newName)){
      alert (newName+ " is already added to phonebook")
    }
    if(nameExists(newNumber)){
      alert (newNumber+ " is already added to phonebook")
    }
    const newPerson ={name: newName, number:newNumber} 
    setPersons([...persons,newPerson])
    setNewName('')
    setNewNumber('')
   
    }
    
    
    const nameExists = (check) => {
      return persons.find(person => person.name === check)
    }
   --
  

  return (
    <div>
      
      <h2>Phonebook</h2>
      <div>
      filter show with <input value={search} onChange={handleSearch}/>
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addName}>
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
        {persons.map((person,index) => 
          <li key={index}>{person.name} {person.number}</li>
        )}


      </ul>
    </div>
  )
}


export default App