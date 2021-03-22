import './MessageSender.css';
import React, { useState } from 'react'
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
function MessageSender() {
    const [input , setInput] = useState('');
    const [imageURL , setImageURL] = useState('');
    const handleSubmit =(event)=>{
        event.preventDefault();
        setInput('');
        setImageURL('');
    }
    return (
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
    )
}

export default MessageSender
