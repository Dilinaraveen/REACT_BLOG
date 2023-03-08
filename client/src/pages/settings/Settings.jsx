import React, {useContext, useState} from 'react'
import "./settings.css"
import Sidebar from '../../components/sidebar/Sidebar'
import {Context} from "../../context/Context";
import axios from "axios";

export default function Settings() {
    const [file,setFile] = useState(null);
    const [username,setUsername] = useState(null);
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [success,setSuccess] = useState(false);
    const {user, dispatch} = useContext(Context);
    const PF = "http://localhost:5000/images/";

    const handleSubmit = async (e) =>{
        e.preventDefault();
        dispatch({type:"UPDATE_START"});
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
        };
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename);
            data.append("file",file);
            updatedUser.profilePicture = filename;
            try{
                await axios.post("/upload",data);

            }catch (e) {}
        }
        try{
            setSuccess(true);
            const res = await axios.put("/users/"+user._id, updatedUser);
            dispatch({type:"UPDATE_SUCCESS", payload: res.data});

        }catch (e) {
            dispatch({type:"UPDATE_FAILURE"});
        }
    };
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
            <label htmlFor="">Profile Picture</label>
            <div className="settingsPP">
                <img 
                    src={file ? URL.createObjectURL(file) :PF+user.profilePicture}
                    alt="" 
                />
                <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                </label>
                <input type="file" id='fileInput' style={{display:"none"}}  onChange={e=>setFile(e.target.files[0])}/>
            </div>

            <label>Username</label>
            <input type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)}/>

            <label>Email</label>
            <input type="email" placeholder={user.email} onChange={e=>setEmail(e.target.value)} />

            <label>Password</label>
            <input type="password"  onChange={e=>setPassword(e.target.value)}/>

            <button className="settingsSubmit" type='submit'>Update</button>

            { success && (
                <span style={{color:'green', textAlign:'center', margin:'40px'}}>Profile has been updated.</span>
            ) }

        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
