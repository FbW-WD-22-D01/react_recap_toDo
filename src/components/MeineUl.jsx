import React from 'react'
import MeineLi from './MeineLi'



// Diese Komponente enthält nur das ul ELement und als Kindelemente die einzelnen li-Komponenten, es erhält von der App Komponente die props (liste, setListe)


function MeineUl(props) {
    return (
    <ul>
        {props.liste.map((el,index) =>{
        //   return <li key={index}>{el}</li>
          return <MeineLi
             key={index}
             todo={el.content}
             solved= {el.solved}
             liste={props.liste}
             setListe={props.setListe} /> 
        })} 
    
    </ul>
  )
}

export default MeineUl