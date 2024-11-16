import axios  from "axios";

const API_KEY='0eb40180ce3e30715b55ff6d31dff2ee'
const BASE_URL='https://api.themoviedb.org/3'


export const getTrendingMovies=async()=>{
    try {
        const response= await axios.get(`${BASE_URL}/trending/movie/week`,{
            params:{
                api_key:API_KEY
            }
        })
        return response.data.results
    } catch (error) {
        console.error('Error al obtener las peliculas ', error)
        return []
    }
}