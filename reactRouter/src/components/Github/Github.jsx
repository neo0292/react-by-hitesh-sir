import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
  const data = useLoaderData()
// const [data, setData] = useState([])
// useEffect(() =>{
//   fetch('https://api.github.com/users/hiteshchoudhary')
//   .then(response => response.json())
//   .then(data => {
//     setData(data)
//   })
// },[])
  
  return (
    <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}</div>
    <img className='flex items-center justify-center ml-[450px]' src={data.avatar_url} alt="gitpic"  width ={300}/>
    </>
  )
}

export default Github

export const GithubLoader = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}