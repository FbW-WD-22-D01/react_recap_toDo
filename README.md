### ToDo Liste mit verschiedenen Komponenten und die Funktionalität von props zeigt

#### nachfolgend ein Muster für ein ToDo Liste, der Code in dem Verzeichis ist etwas anders aufgebaut:
*Schritte*
- Komponente für Input, Komponente für die Ausgabe, eine Komponente die alles Organisiert (App.js)

- App Komponente:
    - Funktionen ( delete, add, edit, lokalen Storage )
    - globalen State ( Liste (vermutlich ein Array) )
    - anderen Komponenten aufrufen

- Input: 
    - input Feld
    - button --> abzuschicken
    - lokalen State --> (onChange Funktion) (Value)

- Ausgabe:
    - ul + li Elemente (einzelne ToDO, Button für delete, solved, (edit))

- props an Komponenten weiterreichen
    Liste --> Ausgabe
    add   --> Input  
    delete --> Ausgabe
    solved --> Ausgabe
    (Bonus: edit  --> Ausgabe)

- was brauchen meine Funktionen an Informationen um zu funktionieren und wie sollen die überhaupt funktionieren...