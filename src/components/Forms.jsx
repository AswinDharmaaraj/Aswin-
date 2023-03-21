import { TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Forms = () => {
    var[fName,setName]=useState("");
    var[sName,setsName]=useState("")
    const changeName=(event)=>{
        setName(event.target.value)
    }

    const change=(event)=>{
        setsName(event.target.value)
    }
    useEffect(()=>{
        setName("[Enter name]")
    },[])
  return (
    <div>
       <Typography variant='h2'>I am {fName}</Typography>
     <br></br>  
      <TextField label='First Name' variant='outlined' onChange={changeName}/><br></br>
      <br></br>
      <Typography variant='h2'>And 
      I am {sName}</Typography>
     <br></br> 
      <TextField label='Second Name' variant='outlined' onChange={change}/>
    </div>
  )
}

export default Forms
