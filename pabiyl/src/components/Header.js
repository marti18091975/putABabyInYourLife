import React, { useState, useEffect } from 'react';
import './header.css';
import userStore from "../stores/userStore";
import { loadDetails } from "../actions/detailAction";
import { NavLink } from 'react-router-dom';


function Header(props) {
    const detailUserId = "5f4e6fc673d494545cfbadfc";
    const [name, setName] = useState();
    const [mainImage, setMainImage] = useState();
    const [detailUsers, setDetailUsers] = useState(userStore.getDetailUsers());
    useEffect(() => {
        userStore.addChangeListener(onChange);


        if (detailUsers.length === 0) {
            loadDetails();
        } else if (detailUserId) {
            const detailUser = userStore.getDetailUserById(detailUserId);
            if (detailUser) {

                setName(detailUser.name);
                setMainImage(detailUser.mainImage);
            }
        }
        return () => userStore.removeChangeListener(onChange);
    }, [detailUsers.length, detailUserId, onChange]);

    function onChange() {
        setDetailUsers(userStore.getDetailUsers());
    }

    return (
        <section className="main__header">
            <button className="burguer-button">
                <ul className="burguer-menu">
                    <li className="menu__header">
                        <NavLink to="/detailUser" className="nav__header">profile</NavLink></li>
                    <li className="menu__header"><NavLink to="/detailUser" className="nav__header">find users</NavLink></li>
                    <li className="menu__header"><NavLink to="/detailUser" className="nav__header">messages</NavLink></li>
                    <li className="menu__header"><NavLink to="/detailUser" className="nav__header">group activities</NavLink></li>
                    <li className="menu__header"><NavLink to="/detailUser" className="nav__header">chat</NavLink></li>
                    <li className="menu__header"><NavLink to="/detailUser" className="nav__header">users experiencies</NavLink></li>
                    <li className="menu__header"><NavLink to="/detailUser" className="nav__header">legal doubts</NavLink></li>
                </ul>
            </button>
            <div className="container__header">
                <h1 className="title__header">Put a baby in your life</h1>
                <img src="https://cdn.icon-icons.com/icons2/1873/PNG/512/baby-6_119902.png" className="logo" alt=""></img>
            </div>
            <div className="container__header">
                <p className="user__name">{name}</p>
                <img src={mainImage} alt="" className="user__image"></img>
            </div>
            <button className="log-out"></button>
        </section>
    )

}
export default Header;