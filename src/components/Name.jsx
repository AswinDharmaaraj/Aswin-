import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Name = () => {
    var[fName,setName]=useState("")
    const changeName=(event)=>{
        const {name,value}=event.target;
        setName(value);
    }
    useEffect(()=>{
        setName("[Enter name]")
    
    },[])
  return (
    <div>
     <Typography variant='h2'>I am {fName}</Typography>
     <br></br> 
     <TextField label="Enter Name" onChange={(e)=> changeName(e)} />
     
    </div>
  )
}


export default Name
