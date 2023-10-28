import { useState } from 'react'
import './App.css'
import Sätze from './Sätze'
import ListComponent from './ListComponent'
import {FaArrowRight} from 'react-icons/Fa'


function App() {

const text = "Lösungen"  
        
const [currentSätze, setSätze] = useState (0)

const [textarea, setTextarea] = useState ('')

const [lösung, setLösung] = useState(false)

const [submitted, setSubmitted] = useState(false)

const [valid, setValid] = useState(false)

const [info, setInfo] = useState(false)

const [openListComponent, setOpenListComponent] = useState(false)



const handleCheck= (e) => {
  setInfo(true)

  if(textarea === Sätze[currentSätze].antwort 
    || textarea === Sätze[currentSätze].variante){
  setValid(true)
  e.target.disabled = true
  }
  else{
  setValid(false)
  }
  setSubmitted(true)
  e.target.disabled = false
}

const handleChange = (event) => {
setTextarea(event.target.value)
}

const handleSubmitted = (event) => {
event.preventDefault()
}

const handleNextSätze = () => {
const nextSätze = currentSätze + 1;
if(nextSätze < Sätze.length){
setSätze(nextSätze)
setTextarea('')
setSubmitted(false)
setInfo(false)
}
else
{
setSätze (0)
setTextarea('')
setSubmitted(false)
setOpenListComponent(false)
}
setLösung(false)
}

const handleReset = () => {
  setTextarea('')
  setSubmitted(false)
  setInfo(false)
}

  return (
  
  <div className="container">

    <h3>Umformungen</h3>
    <h3 className="frases">Verbinde die zwei Hauptsätze mit dem Konnektor.</h3>
    <h3>Aufgabe {currentSätze + 1} / {Sätze.length}</h3>
  
    <div className="frases">
      <h3>{Sätze[currentSätze].aufgabe}</h3>
    </div>

    <form onSubmit={handleSubmitted}>
    
      <textarea
      className="fas" 
      required 
      placeholder={"deine Umformung"}
      value={textarea}
      name="Umformung"
      onChange={handleChange}
      >
      </textarea>
 
    </form>

    <button
    onClick={handleCheck} 
    >check</button>


    {info &&
      <div>
        { valid && submitted &&
        <button className="richtig">richtig</button>}

        { !valid && submitted &&
        <>
          <button className="falsch">falsch</button>

          <button className="nxtBtn"
          onClick={()=> setLösung(!lösung)}>  
          {lösung ? 'Lösung verbergen' : 'Lösung sehen'}
          </button>

          <button className="nxtBtn" type="reset"
          onClick={handleReset}
          >reset</button>
      

          {lösung && 
          <div>
          <h4>
          {Sätze[currentSätze].antwort}
          <br></br>
          {Sätze[currentSätze].variante}
          </h4>
          </div>}    
        </>
        }

        {submitted && 
        <button className="nxtBtn"
        type="submit"
        onClick={handleNextSätze}>
        {currentSätze < Sätze.length -1 ? <FaArrowRight/>:'wiederholen'}
        </button>
        }

        {submitted && currentSätze === Sätze.length -1 &&
        <button className="nxtBtn"
        onClick={()=>setOpenListComponent(true)}>
        alles sehen 
        </button>}

        {openListComponent && <ListComponent text={text}/>}

      </div> 
    }
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      {new Date().getHours() >= 19 ?
      <h3>Guten Abend.</h3>:<h3>Guten Tag.</h3>}

  </div> 
  );  
}

export default App