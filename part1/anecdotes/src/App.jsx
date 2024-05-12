import { useState } from 'react'
const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};
const Button =(props)=>{
 
  return (  <button onClick={props.handleClick}>next anecdotes</button>)
  
}
const UpVote =(props)=>{
 
  return ( 
    <button onClick={() => props.upVoteClick(props.selected)}>upVote</button>
    )
  
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const handleClick =() => {setSelected(getRandomInt(anecdotes.length))}
 
  const [upVote, setUpVote] = useState({})
  const [selected, setSelected] = useState(0)
 
  
  const upVoteClick=()=> {
    
    const copy ={...upVote}
    copy[selected] = (copy[selected] || 0) + 1;
    
    setUpVote(copy)
    
  }
  const mayor = () => {
    let maxIndex = 0;

    for (let i = 0; i < anecdotes.length; i++) {
      if (upVote[i] > upVote[maxIndex] || upVote[maxIndex] === undefined) {
        maxIndex = i
      }
    }
    return maxIndex
  }
 

  return (
    <div>
      <h1>Anecdote of the day</h1>
    <table>
      <tbody>
      
    <tr><td>{anecdotes[selected]}</td></tr>
    <tr><td>has {upVote[selected] || 0} votes</td></tr>
    </tbody>
    </table>
    <Button handleClick={handleClick} />
    <UpVote upVoteClick={upVoteClick} selected = {selected} />
    
    <h1>Anecdote with most</h1>
 
    <table>
      <tbody>
      
    <tr><td>{anecdotes[mayor()]}</td></tr>
    <tr><td>has {upVote[mayor()] || 0} votes</td></tr>
    </tbody>
    </table>

   
    
    </div>
  )
}

export default App