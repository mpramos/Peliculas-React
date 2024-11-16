import React from 'react'
import { Card, CardMedia, CardContent, Typography, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useAuth } from './AuthContext';

function MovieCard({movie}) {
    const {user}= useAuth()
  return (
<Card sx={{width:200, margin:2, borderRadius:3}}>
    <CardMedia
        component='img'
        height='300'
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
    />
    <CardContent>
        <Typography variant='h6'>{movie.title}</Typography>
        <IconButton onClick={()=>alert('agregaste a tus favoritos')}>
         <FavoriteBorderIcon/>   
        </IconButton>
    </CardContent>

</Card>
  )
}

export default MovieCard