import React from 'react'


// Diese Komponente enthält nur das einzelne li-Element, es ist ein Kind von der Ul-Kompnente und bekommt die props (todo, liste, setListe) von dort

function MeineLi(props) {
  
    function handleClick(e){
        console.log('Soll gelöscht werden: ',props.todo, 'soll gelöscht werden aus: ', props.liste)
       
        //  Das Listen-Array wird gefiltert und das Ergebnis in einer lokalen Variablen gespeichert
        const filteredArray = props.liste.filter((el) => {
          return el.content !== props.todo
        })
        // setListe wird benutzt um den State in der App (liste) zu verändern
        props.setListe(filteredArray)
    
    }
  

    function toggleSolved(e){

      console.log('Props: ',props.solved, ' von ', props.todo)
      const result = props.liste.map( (el, index ) => {
        console.log( 'Index: ',index, 'Event', e.target )
        if (el.content === props.todo){
          el.solved = !el.solved
          return el
        } else {
          return el
        }
      })
      props.setListe(result)
    }
  
  return (
    <li className={ props.solved ? 'solved' : 'unsolved'  }> 
     <span onClick={handleClick}>{ props.todo /*das ist das einzelen ToDo aus der map-Funktion in der Ul Komponente */ } </span>
     <button onClick={toggleSolved}>done</button>
    </li>
  )
}

export default MeineLi