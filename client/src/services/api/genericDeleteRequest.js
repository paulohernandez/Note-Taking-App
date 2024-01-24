export  const genericDeleteRequest = async (url , id) =>{
    const response = await fetch(url + id, {
        method: 'DELETE'
    });
    
    if(!response.ok){
        throw new Error('Error in deleting data')
    }
    const data = await response.json()

    return data

}