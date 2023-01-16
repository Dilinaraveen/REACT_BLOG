import React from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Posts from '../../components/posts/Posts'
import "./home.css"
import { useState } from 'react'
import { useEffect } from 'react'

export default function Home() {

  const [posts,setPosts] = useState([]);

  useEffect(() => {
    
  },[]);

  return ( 
    <>
      <Header/>
        <div className='home'> 
          <Posts/>
          <Sidebar/>
        </div>
    </>
  )
}
