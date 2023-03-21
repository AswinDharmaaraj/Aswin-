import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Single = () => {
    var [Inputname, setInputname] = useState({
        frame: "",
        Iname: ''
    })
    const inputHandler = (e) => {
        const { name, value } = e.target
        setInputname({ ...Inputname,[name]:value})
    }
 return (
    <div>
<Typography>First Name is {Inputname.fname}</Typography><br/>  
      <TextField label='First Name' variant='outlined' name='fname' value={Inputname.fname} onChange={inputHandler}/><br></br>
      <Typography> First Name is {Inputname.lname}</Typography><br/>
      <TextField label='Second Name' name='lname' value={Inputname.lname} onChange={inputHandler} variant='outlined'/>
    </div>
    )
}

export default Single
