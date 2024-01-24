import React, { useEffect, useState } from 'react';
import { genericGetRequest } from '../services/api/genericGetRequest';
import { genericDeleteRequest } from '../services/api/genericDeleteRequest';
import { useNotesContext } from '../services/store/NotesContext';
import NotesForm from './NotesForm';

export default function Notes() {
    const { notes , dispatch , viewUpdateAdd} = useNotesContext()
 
    const fetchData = async () => {
        const response = await genericGetRequest('http://localhost:4000/api/notes')
        dispatch({ type: 'SET_NOTES' , payload: response.data })
    }

    const deleteNote = async (id) => {
        const response = await genericDeleteRequest(`http://localhost:4000/api/notes/`, id)
        dispatch({ type: 'DELETE_NOTE' , payload:response.data })
    }

    const updateNote = (data) => {  
       viewUpdateAdd(true,data)
    }
    
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className='mainContainer-notes'>    {notes && notes.map(note => { 
        return (
            <div key={note._id}>
                <h1>Title: {note.title}</h1>
                <p>{note.content}</p>
                <button onClick={()=>{updateNote(note)}}>Update</button>
                <button onClick={()=>{deleteNote(note._id)}}>Delete</button>
            </div>
        )
    })}
    </div>
  )
}
