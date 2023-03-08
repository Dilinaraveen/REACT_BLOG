import React from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Posts from '../../components/posts/Posts'
import "./home.css"
import {useState} from 'react'
import {useEffect} from 'react'
import axios from "axios";
import {useLocation} from "react-router-dom";

export default function Home() {

    const [posts, setPosts] = useState([]);
    const {search} = useLocation();


    // useEffect(() => {
    //   const fetchPosts = async () =>{
    //     const res = await axios.get("/posts");
    //     setPosts(res.data);
    //   }
    //   fetchPosts().then(r => {
    //     console.log(posts)});
    // },[]);

    useEffect(() => {
        axios.get("/posts" + search)
            .then(res => {
                console.log(res);
                setPosts(res.data);
            })
            .catch(err => console.log(err));
    }, [search]);

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
