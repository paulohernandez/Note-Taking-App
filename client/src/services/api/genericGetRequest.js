export  const genericGetRequest = async (url) =>{

    const response = await fetch(url);

    if(!response.ok){
        throw new Error('Error in fetching data')
    }
    const data = await response.json()

    return data

}