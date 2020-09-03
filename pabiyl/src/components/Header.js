import React, { useState, useEffect } from 'react';
import './header.css';
import userStore from "../stores/UserStore";
import { loadDetails } from "../actions/detailAction";

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
            <button className="burguer-button"></button>
            <div className="container__header">
                <img src="https://cdn.icon-icons.com/icons2/1873/PNG/512/baby-6_119902.png" className="logo" alt=""></img>
                <h1 className="title__header">Put a baby in your life</h1>
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