import React, {useEffect, useState} from 'react'
import { genericInsertRequest } from '../services/api/genericInsertRequest'
import { useNotesContext } from '../services/store/NotesContext'

export default function NotesForm() {
    const { dispatch , noteData } = useNotesContext()

    const [ title , setTitle ] = useState('')
    const [ content , setContent ] = useState('')
    const [errorHandler , setErrorHandler ] = useState('')

    useEffect(()=>{
       if(noteData){
        setTitle(noteData.title)
        setContent(noteData.content)
       }
    },[noteData])
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const data = {
            title:title,
            content:content,
            id:28
        }

        const response = await genericInsertRequest('http://localhost:4000/api/notes', data)

        if(response.responsecode === 1){
            dispatch ({ type: 'CREATE_NOTE' , payload:response.note})
            setTitle('')
            setContent('')
            setErrorHandler('')

        }else{
            setErrorHandler(response.message)
        }
    }
  return (
    <form className='noteFormContainer' onSubmit={handleSubmit}>
        <h1>Add Note</h1>
        <h3>{errorHandler}</h3>

        <input 
            type='text'
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
        />
        <textarea 
            onChange={(e)=>setContent(e.target.value)}
            value={content}
        />
        <input 
            type='submit'
            value='submit'
        />
    </form>
  )
}
