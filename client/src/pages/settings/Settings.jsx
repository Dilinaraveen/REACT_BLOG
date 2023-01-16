import React from 'react'
import "./settings.css"
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
            <label htmlFor="">Profile Picture</label>
            <div className="settingsPP">
                <img 
                    src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="" 
                />
                <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                </label>
                <input type="file" id='fileInput' style={{display:"none"}}/>
            </div>

            <label>Username</label>
            <input type="text" placeholder='Dilina' />

            <label>Email</label>
            <input type="email" placeholder='dilina@gmail.com' />

            <label>Password</label>
            <input type="password"/>

            <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}