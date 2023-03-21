import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Table1 = () => {
    var pname=[{name:"amith",age:20,place:"pvk"},
    {name:"amith",age:20,place:"pvk"},
    {name:"amith",age:20,place:"pvk"},
    {name:"amith",age:20,place:"pvk"}
]
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Place</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {pname.map((value,index)=>{
                return <TableRow>
                  <TableCell key ={index}>{value.name}</TableCell>
                  <TableCell key ={index}>{value.age}</TableCell>
                  <TableCell key ={index}>{value.place}</TableCell>

                </TableRow>
              })}
            </TableBody>

        </Table>
      </TableContainer>
    </div>
  )
}

export default Table1
