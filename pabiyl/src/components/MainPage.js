import React, { useEffect, useState } from 'react';
import './mainPage.css';
import { NavLink } from 'react-router-dom';
import { login } from '../actions/AuthActions';
import authStore from '../stores/authStore';
import { loadDetails } from "../actions/detailAction";
import userStore from "../stores/userStore";
function MainPage(props) {
    const [userEmail, setUserEmail] = useState(authStore.getUserEmail());
    useEffect(() => {
        authStore.addChangeListener(onChange);
        setUserEmail(authStore.getUserEmail());
        console.log("AQUÏ TENIM LEMAIL", userEmail);

        return () => authStore.removeChangeListener(onChange);
    }, []);

    function onChange() {
        setUserEmail(authStore.getUserEmail());
    }

    return (

        <main className="main__main">
            <div className="title__main">Put a baby in your life</div>
            <div className="navigation__container">
                <div className="navigation__container--side">
                    <NavLink to="/profile" className="navigation__text">profile</NavLink>
                    <NavLink to="/SearchFilters/" className="navigation__text" >find users</NavLink>
                    <NavLink to="/detailUser/5f4e6fc673d494545cfbadfc" className="navigation__text">messages</NavLink>
                </div>
                <div className="navigation__container--side">
                    <NavLink to="/detailUser/5f4e6fc673d494545cfbadfc" className="navigation__text">group activities</NavLink>
                    <NavLink to="/detailUser/5f4e6fc673d494545cfbadfc" className="navigation__text">chat</NavLink>
                </div>
                <div className="navigation__container--side">
                    <NavLink to="/detailUser/5f4e6fc673d494545cfbadfc" className="navigation__text">users experiencies</NavLink>
                    <NavLink to="/detailUser/5f4e6fc673d494545cfbadfc" className="navigation__text">legal doubts</NavLink>
                </div>

            </div>
        </main >
    )
}
export default MainPage;
