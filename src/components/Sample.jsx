import { Typography } from '@mui/material'
import React from 'react'

const Sample = () => {
    var varname='AJ'
    var pname=["Mottu","Patlu"]
  return (
    <div>
      <Typography><h1>Hello World {varname}</h1></Typography>
    <ul>
        {pname.map((value,index)=>{
            return <li key={index}>{value}</li>
        })}
        </ul>
        </div>
  )
}

export default Sample
