import React, { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github(){
    const data=useLoaderData()
   /* const [data,setData]=useState([])
useEffect(()=>{
    fetch('https://api.github.com/users/Sainath-Kale')
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        setData(data)
    })
},[])*/

    return(
        <div className='text-center text-white m-4 p-4 bg-gray-600 text-3xl'>
            Github Repositories:  {data.public_repos}
            <img  className='flex justify-center items-center' src={data.avatar_url} alt='git picture' width={250}/>
        </div>

    )
}

export default Github


export const githubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/Sainath-Kale')
    return response.json()
}