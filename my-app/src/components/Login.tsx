// src/components/Login.tsx
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async(e: any) => {
        e.preventDefault();
        // console.log('Email:', email);
        // console.log('Password:', password);
        const request ={email,password}
        try{
         const response = await  fetch('https://reqres.in/api/login',{
            method:"POST",
            headers:{
                "content-type":"application/json",
                "x-api-key":"reqres-free-v1"
            },
            body: JSON.stringify(request)
         })
         const result= await response.json();
            
        }catch(error){
            console.log(error)
        }

    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            bgcolor="#f4f6f8"
        >
            <Paper elevation={3} sx={{ p: 4, width: 300 }}>
                <Typography variant="h5" mb={2} textAlign="center">
                    Login
                </Typography>
                <form onSubmit={handleLogin}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Login
                    </Button>
                </form>
            </Paper>
        </Box>
    );
};

export default Login;
