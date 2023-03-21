import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    var [fname,setfname]= useState ("AJ")
    const changeName =()=>{
        setfname("mr.black🔍")
    }
  return (
    <div>
     <h1><Typography>Welcome {fname}</Typography></h1>
     <br>
     </br>
     <Button variant='contained' onClick={changeName}>change</Button>
    </div>
  )
}

export default Statebasics
