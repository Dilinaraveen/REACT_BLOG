import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className='post'>
      <img 
        className='postImg' 
        src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="" 
      />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Lorem ipsum, dolor sit amet
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className='postDesc'>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliqui
         qui animi, vel aut veniam nobis impedit at perferendis reprehenderit nisi
         consequuntur numquam quia recusandae cum aspernatur sequi nesciunt iusto expedita.
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliqui
         qui animi, vel aut veniam nobis impedit at perferendis reprehenderit nisi
         consequuntur numquam quia recusandae cum aspernatur sequi nesciunt iusto expedita.
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliqui
         qui animi, vel aut veniam nobis impedit at perferendis reprehenderit nisi
         consequuntur numquam quia recusandae cum aspernatur sequi nesciunt iusto expedita.
      </p>
    </div>
  )
}
