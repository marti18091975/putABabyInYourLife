import React, { useState, useEffect } from 'react';
//import { Prompt } from 'react-router-dom';
//import user from '../stores/UserStore';
import userStore from '../stores/UserStore';
import { loadDetails } from '../actions/detailAction';


import './detailUser.css';

function DetailUser(props) {
    const detailUserId = '5f4e6fc673d494545cfbadfc';
    const [detailUsers, setDetailUsers] = useState(userStore.getDetailUsers());
    const [detailElement, setDetailElement] = useState({});
    // [user,setUser] = useState({})
    const [name, setName] = useState();
    const [gender, setGender] = useState();
    const [age, setAge] = useState();
    const [city, setCity] = useState();
    const [country, setCountry] = useState();
    const [civilState, setCivilState] = useState();
    const [sons, setSons] = useState();
    const [job, setJob] = useState();
    const [presentation, setPresentation] = useState();
    const [mainImage, setMainImage] = useState();
    const [secondImage, setSecondImage] = useState();
    const [thirdImage, setThirdImage] = useState();
    // const [isFormDirty, setIsFormDirty] = useState(false);


    useEffect(() => {

        userStore.addChangeListener(onChange);
        debugger
        const detailUserId = '5f4e6fc673d494545cfbadfc';
        if (detailUsers.length === 0) {
            debugger
            console.log("something is going wrong");
            loadDetails();
        } else if (detailUserId) {
            const detailUser = userStore.getDetailUserById(detailUserId);
            if (detailUser) {
                setDetailElement(detailUser);
                setName(detailUser.name);
                setGender(detailUser.gender);
                setAge(detailUser.age);
                setCity(detailUser.city);
                setCountry(detailUser.country);
                setCivilState(detailUser.civilState);
                setSons(detailUser.sons);
                setJob(detailUser.job);
                setPresentation(detailUser.presentation);
                setMainImage(detailUser.mainimage);
                setSecondImage(detailUser.secondimage);
                setThirdImage(detailUser.thirdimage);
            }
            debugger
        }
        return () => userStore.removeChangeListener(onChange);

    }, [detailUsers.length, detailElement, detailUserId, onChange]);

    function onChange() {
        setDetailUsers(userStore.getDetailUsers());

    }

    return (
        <main>
            <h1 className="title">{name} PROFILE</h1>
            <div className="center">
                <div className="center__left">
                    <section className="left-side">
                        <div className="text">Name: {name}</div>
                        <div className="text">Gender: {gender}</div>
                        <div className="text">Age: {age}</div>
                        <div className="text">City: {city}</div>
                        <div className="text">Country: {country}</div>
                        <div className="text">Civil state: {civilState}</div>
                        <div className="text">Sons: {sons}</div>
                        <div className="text">Job: {job}</div>
                        <div className="buttons">
                            <button className="buttonE-mail"></button>
                            <button className="buttonChat"></button>
                        </div>
                    </section>
                    <section className="center-side">
                        <img className="image" src={mainImage} alt=""></img>
                    </section>
                </div>
                <section className="right-side">
                    <img src={secondImage} alt=""></img>
                    <img src={thirdImage} alt=""></img>
                </section>
            </div>
            <div className="presentation">{presentation}</div>

        </main>
    )
}
export default DetailUser;