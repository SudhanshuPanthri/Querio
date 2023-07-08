// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import AskQuery from './Pages/AskQuery'
import QueryPage from './Pages/QueryPage'
import ProfilePage from './Pages/ProfilePage'
import UserProfile from './Pages/UserProfile'
import TopContributors from './Pages/TopContributors'

const UserRoutes = () => {
    // const user = false;
    return (
        <Routes>
            <Route path='/auth/login' Component={LoginPage} />
            <Route path='/auth/signup' Component={SignUpPage} />
            <Route exact path='/' Component={HomePage} />
            <Route path='/askQuery' Component={AskQuery} />
            <Route path='/query/:id' Component={QueryPage} />
            <Route path='/query/:tag' Component={QueryPage} />
            <Route path='/user/:id' Component={ProfilePage} />
            <Route path='/myProfile' Component={UserProfile} />
            <Route path='/topContributors' Component={TopContributors} />
        </Routes>
    )
}

export default UserRoutes