import React from "react";
import { TextField , Box} from "@mui/material";

export default function ActionForm(){
    return (
        <Box component="form">
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
                    label="phone"
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
        </Box>
    )
}