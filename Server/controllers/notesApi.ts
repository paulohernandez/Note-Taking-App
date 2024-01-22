import {Request , Response} from 'express'
export default class notesApi {
    static async fetchNotes(req:Request,res:Response){
        console.log('All Notes');
    }
    static async fetchSingleNote(req:Request,res:Response){
        console.log('Single Note'); 
    }
    static async insertNote(req:Request,res:Response){
        console.log('insert Notes'); 
    }
    static async updateNote(req:Request,res:Response){
        console.log('update Notes'); 
    }
    static async deleteNote(req:Request,res:Response){
        console.log('delete Notes'); 
    }
}