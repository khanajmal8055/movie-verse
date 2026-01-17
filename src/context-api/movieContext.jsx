import { createContext, useEffect, useState } from "react";
import axios from "../api/axios.js";
import { Search } from "@mui/icons-material";
import axiosFormdata from "../api/axiosFormData.js";
import { useNavigate } from "react-router-dom";

export const MovieDataContext = createContext()

const MovieContext = ({children})=>{
    const [movie, setMovie] = useState([])
    const [page, setPage] = useState(1)
    const [loading , setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [search, setSearch] = useState("")
    const [sortBy, setSortBy] = useState("rating")
    const [order, setOrder] = useState("desc")
    const [searchedMovie, setSearchedMovie] = useState([])
    const [movieForm, setMovieForm] = useState({title:"" , description:"" , rating:"" ,duration:"" , imdbId:"" ,releaseDate:""})
    const [poster, setPoster] = useState(null)
    const [filterMovies, setFilterMovies] = useState([])
    const [filterTotalPages, setFilterTotalPages] = useState(1)

    const navigate = useNavigate()
    
    


    const getAllMovies = async()=>{
        setLoading(true)
        try {
            const res = await axios.get(`/movies/?page=${page}`)  
            console.log(res.data.data);
            setMovie(res.data.data.movies)
            setCurrentPage(res.data.data.currentPage)
            setTotalPages(res.data.data.totalPages)
            
              
        } 
        catch (error) {
            console.log(error);
            
        }
        finally{
            setLoading(false)
        }
    }

    const getMoviesBySearch = async(search,page)=>{
        setLoading(true)
        try {
            const res = await axios.get(`/movies/search/?search=${search}&page=${page}`)
            console.log(res.data);
            setFilterMovies(res.data.data.movies)
            setFilterTotalPages(res.data.data.totalPages)
            
        } 
        catch (error) {
            alert("No Movies Found based on your Search Query")
        }
        finally{
            setLoading(false)
        }
        
        
    }
    

    const getMoviesBySorting = async(sortBy , order ,page) =>{
        const res = await axios.get(`/movies/sorted?sortBy=${sortBy}&page=${page}&order=${order}`)
        console.log(res.data);
        
        setFilterMovies(res.data.data.movies)
        setFilterTotalPages(res.data.data.totalPages)
        
    }

    const uploadMovie = async(e)=>{
        console.log(movieForm.poster);
        
        e.preventDefault()
        const formData = new FormData()
        formData.append("title", movieForm.title);
        formData.append("description", movieForm.description);
        formData.append("rating", movieForm.rating);
        formData.append("duration", movieForm.duration);
        formData.append("imdbId", movieForm.imdbId);
        formData.append("releaseDate", movieForm.releaseDate);
        formData.append("poster", poster);
        setLoading(true)
        console.log(formData.get("poster"));
        
        try {
            const res = await axiosFormdata.post('/movies/add-movies' , formData)
            console.log(res.data);
            
        } 
        catch (error) {
            console.log(error);
            alert("Movie Not Uploaded")
            
        }
        finally{
            setLoading(false)
        }
    }

    const deleteMovies = async(id)=>{
        try {
           await axios.delete(`/movies/delete-movies/${id}`)
           setTimeout(()=>{
            navigate('/')
           },[1000])
            
        } 
        catch (error) {

        }
    }


    useEffect(()=>{
        
    getAllMovies()
    },[page])

    // console.log(movie);

    useEffect(()=>{

        // debounce method to avoid rapid api calls
        const timer = setTimeout(()=>{
            if(search.trim()){
                getMoviesBySearch(search,page)

            }
        },400)
        
        return () => clearTimeout(timer)
    },[search,page])

    useEffect(()=>{
        setPage(1)
    },[search])
    
    useEffect(()=>{
        getMoviesBySorting(sortBy , order,page)
    },[order,sortBy,page])
    


    return(
        <MovieDataContext.Provider value={{setPage , page,movie , loading , totalPages,currentPage,getMoviesBySearch,setSearch , setOrder,setSortBy,uploadMovie,movieForm,setMovieForm , poster , setPoster , deleteMovies , filterMovies , filterTotalPages}}>
            {children}
        </MovieDataContext.Provider>
    )
}

export default MovieContext