import './MessageSender.css';
import React, { useState } from 'react'
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import {ExpandMoreOutlined} from '@material-ui/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function MessageSender() {
    const [input , setInput] = useState('');
    const [imageURL , setImageURL] = useState('');
    const [chats , setChats] = useState([]);
    let date = new Date();
            let hours = date.getHours() > 12 ? date.getHours() -12 : date.getHours();
            let minutes = date.getMinutes();
            let AM_PM = date.getHours() >= 12 ? 'PM' : 'AM';
            let timestamp = hours + ' : '+ minutes + ' '+AM_PM;
                const handleSubmit =(event)=>{
                    event.preventDefault();
                    console.log(input);
                    let x = chats.slice()
                    x.push({'title':'Aman Singla' , "message":input,"time": timestamp})
                    setChats(x);
                    setInput('');
                    setImageURL('');
                }
    return (
        <>
        <div className='messageSender'>
            <div className="messageSender-top">
                <Avatar src ='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'/>
                <form>
                    <input 
                    type='text' 
                    placeholder={`Whats's on your mind?`}
                    className='messageSender-input'
                    value={input}
                    onChange={(e)=>{setInput(e.target.value)}}
                    />
                    <input placeholder={'image URL (Optional)'}
                        value={imageURL}
                        onChange={(e)=>{setImageURL(e.target.value)}}
                    />
                    <button onClick={handleSubmit}
                    type='submit'
                    >
                        Hidden Submit
                    </button>                  
                </form>
            </div>
            <div className="messageSender-bottom">
                <div className="messageSender-option">
                    <VideocamIcon style={{color: 'red'}}/>
                    <h4>Live Video</h4>
                </div>
                <div className="messageSender-option">
                    <PhotoLibraryIcon style={{color: 'green'}}/>
                    <h4>Photo/Video</h4>
                </div>
                <div className="messageSender-option">
                    <InsertEmoticonIcon style={{color: 'orange'}}/>
                    <h4>Feeling/Activity</h4>
                </div>
            </div>
        </div>
        <div className='post'>
        {
                    chats.map((chat) => (
                        <React.Fragment key={chat.time}>
                            <div className="post-top">
                        <Avatar src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'
                        className='post-avatar'
                        />
                          <div className='post-info'>
                                <h3>{chat.title}</h3>
                                     <p>{chat.time}</p>
                           </div>
                        </div>
                        <div className="post-bottom">
                            <p>{chat.message}</p>
                        </div>
                         <div className="post-options">
                             <div className="post-option">
                                <ThumbUpIcon/>
                                  <p>Like</p>
                                </div>
                        <div className="post-option">
                           <ChatBubbleOutlineIcon/>
                            <p>Comment</p>
                        </div>
                       <div className="post-option">
                            <NearMeIcon/>
                               <p>Share</p>
                        </div>
                         <div className="post-option">
                           <AccountCircleIcon />
                               <ExpandMoreOutlined/>
                           </div>
                        </div>
                        </React.Fragment>
                    ))
                }            
        </div>
    </>
    )
}

export default MessageSender
