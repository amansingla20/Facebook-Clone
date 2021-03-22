import './StoryReel.css';
import React from 'react'
import Story from './Story';

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV4iQmeZ-P5I-sp9NVsusT-RcsYbLD8wC98g&usqp=CAU' 
            profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPhsIJj6jBFsRgPFa2XBDkWzgOSDWZ88yoeg&usqp=CAU'
            title='MS Dhoni'/>
            <Story image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy02kfKaIpVnuKAosOIG4t1X2CniQTgs7iwA&usqp=CAU' 
            profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-Cqb2M0th3BU9B7R9h_1NfKEl78Dv2Ss1g&usqp=CAU' 
            title='Sachin Tendulkar'/>
            <Story image='https://assets.telegraphindia.com/telegraph/1c43a64c-d7cd-4090-9710-7a6975900877.jpg' 
            profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-Cqb2M0th3BU9B7R9h_1NfKEl78Dv2Ss1g&usqp=CAU' 
            title='Sachin Tendulkar'/>
            <Story image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2sq0hvAu6lWrUUYerHaC0z0HZLP1E_kpztw&usqp=CAU' 
            profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPhsIJj6jBFsRgPFa2XBDkWzgOSDWZ88yoeg&usqp=CAU'
            title='MS Dhoni and Sushant Singh Rajput'/>
            <Story image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEOstOopmlXXtW8mq9pGrtPGVxSdI8aaYrHQ&usqp=CAU' 
            profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPhsIJj6jBFsRgPFa2XBDkWzgOSDWZ88yoeg&usqp=CAU'
            title='MS Dhoni'/>
        </div>
    )
}

export default StoryReel
