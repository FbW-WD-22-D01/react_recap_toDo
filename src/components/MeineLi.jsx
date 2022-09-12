import React from 'react'


// Diese Komponente enthält nur das einzelne li-Element, es ist ein Kind von der Ul-Kompnente und bekommt die props (todo, liste, setListe) von dort

function MeineLi(props) {
  
    function handleClick(e){
       
        console.log('Soll gelöscht werden: ',props.todo, 'soll gelöscht werden aus: ', props.liste)
       
        //  Das Listen-Array wird gefiltert und das Ergebnis in einer lokalen Variablen gespeichert
        const filteredArray = props.liste.filter((el) => {
          return el !== props.todo
        })
        // setListe wird benutzt um den State in der App (liste) zu verändern
        props.setListe(filteredArray)
    
    }
  
  
  return (
    <li 
        onClick={handleClick}> 
     { props.todo /*das ist das einzelen ToDo aus der map-Funktion in der Ul Komponente */ } 
    </li>
  )
}

export default MeineLi