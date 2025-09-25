



import React,{useState,useEffect} from 'react'
function App(){
const [quotes,setquotes]=useState([])
useEffect(()=> {
    fetch("https://dummyjson.com/quotes")
    .then((resolve)=> resolve.json())
    .then((data)=>{
        setquotes(data.quotes.slice(1,10))
    })
    .catch((error)=> console.reeor(error.message))
},[])
return (
    <div><ol>
        {quotes.map((quote)=> <li>{quote.quote}</li>)}</ol>

    </div>
)

}
export default App
