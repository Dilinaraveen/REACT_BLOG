import React from 'react'
import "./singlepost.css"

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img 
            src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="" 
            className="singlePostImg" 
        />
        <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet.
            <div className="singlePostEdit">
                <i class="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i class="singlePostIcon fa-regular fa-trash-can"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className='singlePostAuthor'>Author: <b>Dilina</b></span>
            <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate  impedit magnam! Soluta, dolorum nulla. 
            Quam quo dolores explicabo, odit odio  ipsum. Ipsam dignissimos perspiciatis quidem tenetur earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate  impedit magnam! Soluta, dolorum nulla. 
            Quam quo dolores explicabo, odit odio  ipsum. Ipsam dignissimos perspiciatis quidem tenetur earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate  impedit magnam! Soluta, dolorum nulla. 
            Quam quo dolores explicabo, odit odio  ipsum. Ipsam dignissimos perspiciatis quidem tenetur earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate  impedit magnam! Soluta, dolorum nulla. 
            Quam quo dolores explicabo, odit odio  ipsum. Ipsam dignissimos perspiciatis quidem tenetur earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate  impedit magnam! Soluta, dolorum nulla. 
            Quam quo dolores explicabo, odit odio  ipsum. Ipsam dignissimos perspiciatis quidem tenetur earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate  impedit magnam! Soluta, dolorum nulla. 
            Quam quo dolores explicabo, odit odio  ipsum. Ipsam dignissimos perspiciatis quidem tenetur earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate  impedit magnam! Soluta, dolorum nulla. 
            Quam quo dolores explicabo, odit odio  ipsum. Ipsam dignissimos perspiciatis quidem tenetur earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate  impedit magnam! Soluta, dolorum nulla. 
            Quam quo dolores explicabo, odit odio  ipsum. Ipsam dignissimos perspiciatis quidem tenetur earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate  impedit magnam! Soluta, dolorum nulla. 
            Quam quo dolores explicabo, odit odio  ipsum. Ipsam dignissimos perspiciatis quidem tenetur earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate  impedit magnam! Soluta, dolorum nulla. 
            Quam quo dolores explicabo, odit odio  ipsum. Ipsam dignissimos perspiciatis quidem tenetur earum.
        </p>
      </div>
    </div>
  )
}