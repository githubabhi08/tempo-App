import React, { useEffect, useState } from 'react'
import "./App.css"
function App() {
  const[dyna,setdyna]=useState('London')
  const[data,setdata]=useState(null)
  const[tym,settym]=useState('')

 

 const time=()=>{
    const store=setInterval(()=>{
    const store2=new Date();
    const a=store2.toLocaleTimeString()
    settym(a)
    },1000)
  return ()=>{
    clearInterval(store)
  }
  }

  const clim=async()=>{
    const reserve=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${dyna}&appid=a23a137c49937f27ec441b26b2d10823`)
    const store=await reserve.json()
    setdata(store.main)
    console.log(store.main);
  }


  useEffect(()=>{
    clim()
  },[dyna])

  const magic=(e)=>{
    setdyna(e.target.value)
  }

useEffect(()=>{
  time()
},[])


  return (
    <>
  <h1 className='tym'>{tym}</h1>

    <h1 className='head'>Know Temparature</h1>
    <div className='input-main'>
    <input type="search" placeholder='city name' onChange={magic} value={dyna} className='input' />
  
    <h1 className='output'>{dyna}</h1>

    {!data?(
    <h3 className='err'>Result not Found!...</h3>
   )
  :(<>
  <p className='res1'>Temp: {data.temp} K</p>
  
  <p className='res2'>Humidity: {data.humidity}</p>

  </>
    
  )
  

  }
    </div>
    
<div>

</div>
   
    
    </>
  )
}

export default App
