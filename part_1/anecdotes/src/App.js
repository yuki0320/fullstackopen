import { useState } from 'react'
const Button = ({handleClick,text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Anecdotes = ({title, anecdotes,selected,point}) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{anecdotes[selected]}</div>
      <div >has {point} votes</div>
    </div>
  )
  
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(7))
  const [mostVoted, setMostVoted] = useState(0)
  
  const next = () => {
    const newSelected =  Math.floor(Math.random() * anecdotes.length)
   
    setSelected(newSelected)
  }
  // const points = new Uint8Array(7)
 
  const vote = () => {
    
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    console.log('vote',copy[selected],mostVoted,copy[mostVoted] )
    if(copy[selected] > copy[mostVoted]) {
      setMostVoted(selected)
    }
  }
  


  return (
    <div>
      <Anecdotes anecdotes={anecdotes} selected={selected} point={points[selected]} title='Anecdotes of the day' />
      
      <Button handleClick={vote} text='vote'></Button>
      <Button handleClick={next} text='next anecdotes'></Button>
      <Anecdotes anecdotes={anecdotes} selected={mostVoted} title='Anecdotes with most votes'  point={points[mostVoted]} />
    </div>
  )
}

export default App
