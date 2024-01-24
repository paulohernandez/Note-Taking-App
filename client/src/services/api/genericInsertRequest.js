export const genericInsertRequest = async (url,payload) =>{

    const data = {
        title:payload.title,
        content:payload.content,
        userId:payload.id
    }

    const response = await fetch ( url , {
       method:'POST',
       headers:{
        "Content-Type": "application/json"
       },
       body:JSON.stringify(data)
    })
    
    const postData = await response.json()
    
    return postData 
    
}