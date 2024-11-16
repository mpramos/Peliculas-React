import React from 'react'
import { useAuth } from '../componentes/AuthContext';
import { Button, Typography, Box } from "@mui/material";

const Welcome = () => {
    const {login,logout,user}= useAuth()
  return (
    <Box
        sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            minHeight:'10vh',
            bgcolor:'background.default',
            color:'text.primary'
        }}
    
    >
        <Typography variant='h3'>
            WATCH
        </Typography>
        
        <Typography variant='body1' gutterBottom>
            Enjoy the newest movies
        </Typography>
        <Button variant='contained' color='primary' onClick={login}>
            Login with Google
        </Button>
        <p>{user.displayName}</p>
        <img style={{borderRadius:'50%'}} src={user.photoURL} alt="" srcset="" />


    </Box>
)
}

export default Welcome