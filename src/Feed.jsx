import './Feed.css';
import React from 'react'
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
function Feed() {
            let date = new Date();
            let hours = date.getHours() > 12 ? date.getHours() -12 : date.getHours();
            let minutes = date.getMinutes();
            let AM_PM = date.getHours() >= 12 ? 'PM' : 'AM';
            let display = hours + ' : '+ minutes + ' '+AM_PM;
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>
            <Post 
            profilePic='https://i.pinimg.com/originals/1e/a3/c8/1ea3c8d857a5538900ebb4f6ce56f9e1.jpg'
            message='Hi Aman MS this side...'
            username='MS Dhoni'
            image='https://cdn.newsapi.com.au/image/v1/cb49350696ec416fc5dbc78754486a94'
            timestamp = {display}
            />
            <Post 
            profilePic='https://i.pinimg.com/originals/1e/a3/c8/1ea3c8d857a5538900ebb4f6ce56f9e1.jpg'
            message='Finisher Is Not Finished Yet.. CSK will win. Have Trust, Have Patience...'
            username='MS Dhoni'
            image='https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/08/12/918703-916678-619584-csk-102517.jpg'
            timestamp={display}
            />
        </div>
    )
}

export default Feed
