import React from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Posts from '../../components/posts/Posts'
import "./home.css"
import { useState } from 'react'
import { useEffect } from 'react'
import axios, {Axios} from "axios";
import {logDOM} from "@testing-library/react";

export default function Home() {

  const [posts,setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchPosts = async () =>{
  //     const res = await axios.get("/posts");
  //     setPosts(res.data);
  //   }
  //   fetchPosts().then(r => {
  //     console.log(posts)});
  // },[]);

  useEffect(() => {
    axios.get("/posts")
        .then(res=> {
          console.log(res);
          setPosts(res.data);
        })
        .catch(err => console.log(err));
  },[]);

  return ( 
    <>
      <Header/>
        <div className='home'> 
          <Posts posts={posts}/>
          <Sidebar/>
        </div>
    </>
  )
}
