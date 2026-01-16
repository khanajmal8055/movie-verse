import React, { createContext, useEffect, useState } from 'react'
import axios from '../api/axios'
import { FormatQuote, Password } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

export const UserDataContext = createContext()

const UserContext = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loginForm, setLoginForm] = useState({email:'' , password:''})
    const [loginError, setLoginError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [registerForm, setRegisterForm] = useState({email:"",userName:"" , fullName:"" , password:"" , adminKey:""})
    const [errors, setErrors] = useState("")
    const [admin, setAdmin] = useState(false)

    const navigate = useNavigate()


    const registerUser = async(e)=>{
        console.log(registerForm.email);
        console.log(registerForm.name);
        console.log(registerForm.password);
        console.log(registerForm.fullName);
        console.log(registerForm.adminKey);
        
        
        
        
        
        e.preventDefault()
        setErrors("")
        setIsLoading(true)
        try {
            const res = await axios.post('/user/register' , registerForm)

            navigate('/login')
            
        } 
        catch (error) {
            console.log(error);
            
        }
        finally{
            setIsLoading(false)
        }
    }

    const loginUser = async(e)=>{
        e.preventDefault();
        setLoginError("");
        setIsLoading(true);
        try {
            const res = await axios.post("/user/login", loginForm);
            // console.log(res.data);
            const loggedInUser = res.data.data.user
            setUser(loggedInUser)
            setIsLoading(true)
            if(loggedInUser.role === "admin"){
                setAdmin(true)
            }
            else{
                setAdmin(false)
            }
            
            
            setTimeout(() => {
                navigate('/')
            }, 1000);
        } 
        catch (error) {
            console.error(error);
            setLoginError("Invalid email or password");
        } 
        finally {
            setIsLoading(false);
            
        }
    }

    const getProfile = async()=>{
        try {
          const res = await axios.get('/user/view-profile')
        //   console.log(res.data.data);
        const profileUser = res.data.data
          setUser(profileUser)
          setIsLoggedIn(true)
          
          if(profileUser.role === "admin"){
            setAdmin(true)
          }
          else {
            setAdmin(false)
          }
            
        } 
        catch (error) {
            console.log(error);
            setUser(null);
            setIsLoggedIn(false);
            setAdmin(false);
            
        }
    }

    // console.log(user);

    const logoutUser = async()=>{
        try {
            await axios.post('/user/logout')
            setIsLoggedIn(false)
            setUser(null)
            setAdmin(false)
            
        } 
        catch (error) {
            console.log(error);
                
        }
    }


    useEffect(()=>{
        getProfile()
    },[])
    
    
    
  return (
    <UserDataContext.Provider value={{loginUser , loginForm , setLoginForm , loginError , isLoading , isLoggedIn,user , logoutUser,registerForm,setRegisterForm,errors , registerUser,admin}}>
        {children}
    </UserDataContext.Provider>
  )
}

export default UserContext