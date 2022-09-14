import { useState } from 'react'
import './App.css'
import MeineUl from './components/MeineUl'

function App() {
  const [input, setInput] = useState('')
  const [liste, setListe] = useState([{content: 'erstes to do', solved: true}])

function addItem(){
  setListe([...liste, {content: input, solved: false}])
  setInput('')
}

function removeItem(){}

function toggleSolved(){}

  return (
    <div className="App">
       <input type="text" onChange={(e) => setInput(e.target.value)} value={input}/> 
       <button onClick={addItem}>Add</button>
      {/* <ul>
        {liste.map((el,index) => <li key={index}>{el}</li>)}
      </ul> */}
      <MeineUl liste={liste} setListe={setListe}  /> 

    </div>
  )
}

export default App
