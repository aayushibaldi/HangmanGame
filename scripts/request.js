const getPuzzle = async (wordCount) =>{
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if(response.status === 200){
        const data = await response.json()
        return data.puzzle
    }else
        throw new Error('Puzzle not found')
    
}
const getCountryDetails = async(countryCode)=>{
    const response = await fetch('http://restcountries.eu/rest/v2/all')
        if(response.status === 200){
            const data = await response.json()
            return data.find((country)=> country.alpha2Code === countryCode)
        }else{
            throw new Error('Data not fetched')
        }
}

const getCurrentCountry = async ()=>{
    const location =await getLocation()
    const country = await getCountryDetails(location.country)
    return country
}

const getLocation = async()=>{
    const response = await fetch('https://ipinfo.io/json?token=313af9f57ad4d9')
        if(response.status === 200)
            return response.json()
        else
            throw new Error('Location not found')
    
}
/*const getPuzzle = (wordCount)=> new Promise((resolve,reject)=>{
        //HTTP request
 const request = new XMLHttpRequest()
 request.addEventListener('readystatechange',(e)=>{
    if(e.target.readyState === 4 && e.target.status === 200){
        const data = JSON.parse(e.target.responseText)
        resolve(data.puzzle)
    }else if(e.target.readyState === 4){
        reject('An error occured')
    }
})
 request.open('GET',`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
 request.send()
})*/
/*const getPuzzle = (wordCount) =>{
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response)=>{
        if(response.status === 200)
            return response.json()
        else
            throw new Error('Puzzle not found')
    }).then((data)=>{
        return data.puzzle
    })
}*/


//synchronous 
/*const getPuzzleSync = ()=>{
    //HTTP request
 const request = new XMLHttpRequest()
 request.open('GET','http://puzzle.mead.io/slow-puzzle?wordCount=2',false)
 request.send()

if(request.readyState === 4 && request.status ===200)
{
    const data = JSON.parse(request.responseText)
    return data.puzzle
}
else if(request.readyState === 4)
     throw new Error('Things did not go well')
 

 
}*/

/*const getCountryDetails = (countryCode)=> new Promise((resolve,reject)=>{
    const countryRequest = new XMLHttpRequest()
    countryRequest.addEventListener('readystatechange',(e)=>{
        if(e.target.readyState === 4 && e.target.status ===200){
            const data = JSON.parse(e.target.responseText)
            const match = data.find((country)=> country.alpha2Code === countryCode)
    
            resolve(match)
            
        }else if(e.target.readyState === 4){
            reject('An error has occurred')
        }
    })
 countryRequest.open('GET','http://restcountries.eu/rest/v2/all')
 countryRequest.send()
})*/
/*const getCountryDetails = (countryCode)=>{
    return fetch('http://restcountries.eu/rest/v2/all').then((response)=>{
        if(response.status === 200){
            return response.json()
        }else{
            throw new Error('Data not fetched')
        }
    }).then((data)=> data.find((country)=> country.alpha2Code === countryCode))
}*/