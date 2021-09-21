import React from 'react';
import './App.css';
// import axios from 'axios';
import Dummynotes from './interface/Dummynotes'
import Note from './component/Note/Note'

function App() {
  const [noteList, setnoteList] = React.useState<any>([])
  

  React.useEffect(() => {
    setnoteList(Dummynotes)
    
  }, [])


  // const note = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/notes");
      
  //     setnoteList(response.data) 
  //     console.log(noteList)
  //   } catch (err) { console.error(err) }  
  // }
  // console.log(noteList)
  const noteUpdate=(text:string)=>{
    console.log(text)
    console.log(noteList)
    
  
  }
  return (
    <div className="App"> 
      <div>
        
        {/* <button onClick={note}>Clickmen</button> */}
      </div>
      <div>
      <h1 id='note__app'>Note App</h1>
        <div className="note-div">
        
          {
            noteList.map((noteItem:any,index:any)=>{
              return (
                <Note note={noteItem} onNoteUpdate={noteUpdate} key={index}/>
              )
              
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
