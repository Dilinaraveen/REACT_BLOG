import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div className='header'>
            <div className='headerTitles'>
                <span className='headerTitlesSm'>React & Node</span>
                <span className='headerTitlesLg'>Blog</span>
            </div>
            <img 
                className='headerImg' 
                src="https://images.pexels.com/photos/633520/pexels-photo-633520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="" 
            />
    </div>
  )
}
