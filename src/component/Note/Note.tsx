import { type } from 'os';
import React, { FC ,FocusEvent} from 'react';
import Inote from '../../interface/note.interface';
import './Note.css';

type Props={
    note:Inote;
    onNoteUpdate:Function;
}



const Note: FC<Props> =({note , onNoteUpdate}) =>{

  const note_update=(event:FocusEvent<HTMLDivElement>)=>{
    console.log("note updated")
   onNoteUpdate(event.currentTarget.textContent)
  }

    return( <div className="note" suppressContentEditableWarning={true} contentEditable onBlur={note_update}  >
    <div className='note__name'>{note?.name}</div>
    {/* <div className="note__married">{note?.married}</div> */}
  </div>)
  
}
 export default Note;
