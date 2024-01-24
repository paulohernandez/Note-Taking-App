import { createContext , useContext , useLayoutEffect, useReducer, useState } from "react";

const NotesContext = createContext(null)

const notesReducer = (state,action) => {
    switch(action.type){
        case 'SET_NOTES':
        return {
            notes: action.payload
        }
        case 'CREATE_NOTE':
        return{
            notes: [action.payload , ...state.notes]
        }
        case 'DELETE_NOTE':
        return{
            notes : state.notes.filter((n) => n._id !== action.payload._id)
        }
        default :
        return state;
        
    }
}

export const NotesContextProvider = ({children}) => {
    const [data , setData ] = useState({})

    const viewUpdateAdd = (condition,note) => {
       setData(note)
       return data
    }
    const [ state , dispatch ] = useReducer(notesReducer,{
        notes: null
    })
    return(
        <NotesContext.Provider value={{...state ,dispatch, data , viewUpdateAdd }}>
            {children}
        </NotesContext.Provider>
    )
}

export const useNotesContext = () => useContext(NotesContext)