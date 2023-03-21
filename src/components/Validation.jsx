import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, } from 'react'
import { useState } from 'react'

const Validation = () => {
    const [submitted, setSubmitted] = useState(false);
    var [Inputname, setInputname] = useState({
        fname: "",
        Iname: "",
    })
    var [Validation, setValidation] = useState({
        fname: "",
        Iname: "",
    })
    const inputHandler = (e) => {
        const { name, value } = e.target
        setInputname({ ...Inputname, [name]: value })
    }
    const checkValidation = () => {
        let errors = Validation;
        if (!Inputname.fname.trim()) {
            errors.fname = "First name is required";
        } else {
            errors.fname = "";
        }
        setValidation(errors);
    }
    useEffect(() => {
        checkValidation();
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };
    return (
        <div>
            <form
                id="registrationForm"
                onSubmit={handleSubmit}
            >
                <Typography>First name is {Inputname.fname}</Typography>
                <TextField label='First Name' variant='outlined' name='fname' value={Inputname.fname} onChange={inputHandler} />
                {Validation.fname && submitted && <p>{Validation.fname}</p>}
                <Button type='submit' variant='outlined'>Save</Button>
                <br></br>
                <Typography>Last name is {Inputname.lname}</Typography>
                <TextField label='Last Name' variant='outlined' name='lname' value={Inputname.lname} onChange={inputHandler} />
                {Validation.lname && submitted && <p>{Validation.lname}</p>}
                <Button type='submit' variant='outlined'>Save</Button>
            </form>
        </div>
    )
}

export default Validation
