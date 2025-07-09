// src/components/Login.tsx
import { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import { GetUseContexData } from './StoreContex';
import { useNavigate } from "react-router-dom";
import { showToast } from './utils';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { handleDispatch } = GetUseContexData();
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        const request = { email, password }
        try {
            const response = await fetch('https://reqres.in/api/login', {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "x-api-key": "reqres-free-v1"
                },
                body: JSON.stringify(request)
            })
            const result = await response.json();
            if (result?.token) {
                handleDispatch({ type: "SET_AUTH", payLoad: result?.token || '' });
                showToast("Login Successfully done", 'success');
                navigate('/home')
            } else {
                showToast(result?.error, 'error');
            }

        } catch (error) {
            handleDispatch({ type: "SET_AUTH", payLoad: '' });
            throw new Error(error);
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
