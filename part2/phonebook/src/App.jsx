import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const addName = (event) => {
   
    
    event.preventDefault()
    const newPerson ={name: newName}
    if(nameExists(newName)){
      alert (newName+ " is already added to phonebook")
    }
    setPersons([...persons,newPerson])
    setNewName('')
   
    }
    
    const nameExists = (check) => {
      return persons.find(person => person.name === check)
    }
   
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {persons.map((person,index) => 
          <li key={index}>{person.name}</li>
        )}


      </ul>
    </div>
  )
}


export default App