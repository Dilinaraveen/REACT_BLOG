import React, {useEffect, useState} from 'react'
import "./sidebar.css";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats();
    }, []);
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src="https://images.pexels.com/photos/2422286/pexels-photo-2422286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Vitae, sapiente quos repudiandae quam sequi, quae
                    quidem nisi incidunt mollitia maiores, minus illo facere
                    temporibus voluptatem ipsam quia eveniet est officia!
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className='sidebarList'>
                    {cats.map(c => (
                        <Link to={`/?cat=${c.name}`} className='link'>
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>

                    ))}

                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
    )
}
