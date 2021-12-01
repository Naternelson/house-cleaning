import React from "react";
import { TextField , Box, Button} from "@mui/material";
import env from 'react-dotenv'
import emailjs from 'emailjs-com'

export default function ActionForm(){

    const submitHandler = (e)=>{
        e.preventDefault()
        // const params = [userEmailToken]
        const params = [env.GMAIL_SERVICE_ID, env.GMAIL_TEMPLATE_ID, {message: 'Hello World'}, env.GMAIL_USER_TOKEN]
        console.log(params)
        emailjs.send(...params)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.error(error.text);
            });
    }


    return (
        <Box 
            component="form"
            onSubmit={submitHandler}
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
        >
            <div>
                <TextField
                    id="first-name"
                    label="First Name"
                />
                <TextField
                    id="last-name"
                    label="Last Name"
                />
            </div>
            <div>
                <TextField
                    id="email"
                    label="Email Address"
                    type="email"
                />
                <TextField
                    id="phone"
                    label="Phone"
                />
            </div>
            <div>
                <TextField
                    id="city"
                    type="search"
                    label="City"
                />
                <TextField 
                    id="state"
                    type="search"
                    label="State"
                />
            </div>
            <div>
                <Button variant="outlined" type="submit">Submit</Button>
            </div>
        </Box>
    )
}