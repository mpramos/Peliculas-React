import React, { useEffect, useState } from 'react'
import { Box, Typography } from "@mui/material";
import { getTrendingMovies } from "../api";
import MovieCard from '../componentes/MovieCard';

const Trending = () => {

    const [movies,setMovies]=   useState([])
    useEffect(()=>{
        const fetchMovies=async () => {
            const trendingMovies= await getTrendingMovies()
            setMovies(trendingMovies)
        }
        fetchMovies()
    },[])

    return (
        <Box sx={{padding:'20px', marginLeft:'240px'}}>
            <Typography variant='h4'>Trending Movies</Typography>
            <Box sx={{display:'flex',flexWrap:'wrap'}}>
                {movies.map(movie=>(
                    <MovieCard movie={movie}/>
                ))}

            </Box>
        </Box>
  )
}

export default Trending