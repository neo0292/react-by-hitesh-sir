import React from 'react'
import { useDispatch, useSelector } from 'react-redux' //send Data to  store
import  authService  from '../../appwrite/auth'   // update database
import { logout } from '../../store/authSlice'  // 

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout())
      authService.logout().then(() => {
        dispatch(logout());
        
      })
      
  }
  
  return (
    <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn