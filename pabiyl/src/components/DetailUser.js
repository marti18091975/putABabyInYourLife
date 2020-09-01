import React, { useState, useEffect } from 'react';
import user from '../stores/UserStore';
import userStore from '../stores/UserStore';
import './detailUser.css';

const userM = {
    "name": "MartaGutierrez",
    "gender": "Female",
    "age": 35,
    "city": "Barcelona",
    "country": "Spain",
    "civilState": "divorced",
    "sons": 2,
    "job": "waitress",
    "mainimage": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "secondimage": "https://images.unsplash.com/photo-1524511498335-b0ed6b8e9a69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1087&q=80",
    "thirdimage": "https://image.shutterstock.com/image-photo/hiker-woman-standing-hands-achieving-260nw-698075230.jpg",
    "fourthimage": "https://traceyrickard.co.uk/wp-content/uploads/2018/05/happy-768x512.jpg",
    "fifthimage": "https://tq621ntvns22q1ju19sjsstx-wpengine.netdna-ssl.com/wp-content/uploads/2015/06/2015-06-08-woman-on-beach-1024x683-photodune-3349638-freedom-m.jpg",
    "presentation": "Hello, welcome to my profile! I have entered this page because they have told me that it works!Nowadays the classic sentimental relationships have been complicated and I wish I could be a mother, but at the same time I want to share this trip with another companion, will it be you?"
};



function DetailUser() {
    //  const [detailElement, setDetailElement] = useState(user.getDetailById(getUrl()));
    const [name, setName] = useState(userM.name);
    const [gender, setGender] = useState(userM.gender);
    const [age, setAge] = useState(userM.age);
    const [city, setCity] = useState(userM.city);
    const [country, setCountry] = useState(userM.country);
    const [civilState, setCivilState] = useState(userM.civilState);
    const [sons, setSons] = useState(userM.sons);
    const [job, setJob] = useState(userM.job);
    const [presentation, setPresentation] = useState(userM.presentation);
    const [mainImage, setMainImage] = useState(userM.mainimage);
    const [secondImage, setSecondImage] = useState(userM.secondimage);
    const [thirdImage, setThirdImage] = useState(userM.thirdimage);
    const [fourthImage, setFourthImage] = useState(userM.fourthimage);
    const [fifthImage, setFifthImage] = useState(userM.fifthimage);

    /*useEffect(() => {
        userStore.addChangeListener(onChange);
         if (!detailElement) {
             setDetailElement(user.getDetailById(getUrl()));
         } else {
             setName(detailElement.name);
             setGender(detailElement.gender);
             setAge(detailElement.age);
             setCity(detailElement.city);
             setCountry(detailElement.country);
             setCivilState(detailElement.civilState);
             setSons(detailElement.sons);
             setJob(detailElement.job);
             setPresentation(detailElement.presentation);
             setMainImage(detailElement.mainImage);
             setSecondImage(detailElement.secondImage);
             setThirdImage(detailElement.thirdImage);
             setFourthImage(detailElement.FourthImage);
             setFifthImage(detailElement.FifthImage);
 
         }
         return () => userStore.removeChangeListener(onChange);
     }, [detailElement]);
 
     function onChange() {
         setDetailElement(user.getDetailById(getUrl()));
     }
 
     function getUrl() {
         var actual = window.location + '';
         var split = actual.split('/');
         var id = split[split.length - 1];
 
         return decodeURI(id);
     }*/

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
                    </section>
                    <section className="center-side">
                        <img className="image" src={mainImage} alt=""></img>
                    </section>
                </div>
                <section className="right-side">
                    <img src={secondImage}></img>
                    <img src={thirdImage}></img>
                </section>
            </div>
            <div className="presentation">{presentation}</div>

        </main>
    )
}
export default DetailUser;