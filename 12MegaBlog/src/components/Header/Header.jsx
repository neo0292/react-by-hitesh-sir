import React from 'react'
import { Logo, LogoutBtn, Container } from '../index'// or we can write '../'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Header() {

//   const authStatus = useSelector((state) => state.auth.status);
// console.log(`Redux State - Auth Status: ${authStatus}`);

// const revAuth = !authStatus;
// console.log(`Negation of Auth Status: ${revAuth}`);


  const authStatus = useSelector((state)=>state.auth.status);
  console.log(authStatus);
  console.log(typeof authStatus);
  console.log(typeof !authStatus);
  console.log(`AuthStatis: ${authStatus}`);
   const revAuth = !authStatus;
  console.log(`Rev: ${!authStatus}`);


  const navigate = useNavigate();
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },]

  {navItems.map((item)=> 
    console.log('header item status:',item.name +'   '  + item.active))}

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to= '/'> 
              <Logo width= '70px'/>
            </Link>
          </div>
          <ul className='flex ml-auto'>
          
            {navItems.map((item)=> 
              item.active ? 
              (<li key ={item.name}>{console.log(item.name+' '+item.active)}
                <button onClick={()=>navigate(item.slug)}
                  className='inline-block px-2 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                  {item.name}
                </button>
              </li>) 
              : null
              
            ) }
            {authStatus && (
                <li>
                  <LogoutBtn/>
                </li>)}
          </ul>


        </nav>
      </Container>
    </header>
  )
}

export default Header