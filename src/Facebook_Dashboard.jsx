import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

function Facebook_Dashboard() {
    return (
        <div className='app'>
            <Header/>
            <div className="app-body">
            <Sidebar/>
            <Feed /> 
            </div>     
        </div>
    )
}

export default Facebook_Dashboard
