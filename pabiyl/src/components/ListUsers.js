import React, { useState, useEffect } from "react";
//import { Prompt } from 'react-router-dom';
//import user from '../stores/UserStore';
import userStore from "../stores/UserStore";
import { loadDetails } from "../actions/detailAction";
import { NavLink } from 'react-router-dom';

import "./listUsers.css";

function ListUsers(props) {

    const [users, setUsers] = useState([]);
    const actualUsersList = users.map((user) => {
        const link = '/detailUser/' + user._id;
        return (

            <div className="user-list__item">
                <img className="list-image" alt="" src={user.mainImage}></img>
                <div className="right-side">
                    <div className="text name">{user.name}</div>
                    <div className="right-side__container">
                        <div className="box">
                            <img alt="" className="img__description" src="https://image.flaticon.com/icons/svg/888/888063.svg" ></img>
                            <div className="text">{user.city}</div>
                        </div>
                        <div className="box">
                            <img alt="" className="img__description" src="https://image.flaticon.com/icons/svg/3021/3021790.svg"></img>
                            <div className="text">{user.age}</div>
                        </div>
                    </div>
                    <div className="right-side__container">
                        <div className="box">
                            <img alt="" className="img__description" src="https://image.flaticon.com/icons/svg/1761/1761430.svg"></img>
                            <div className="text">{user.sons} sons</div>
                        </div>
                        <div className="box">
                            <img alt="" className="img__description" src="https://image.flaticon.com/icons/svg/1102/1102457.svg" ></img>
                            <div className="text">{user.civilState}</div>
                        </div>
                    </div>
                </div>

            </div>

        );
    });
    useEffect(() => {
        userStore.addChangeListener(onChange);

        loadDetails();

        return () => userStore.removeChangeListener(onChange);
    });
    function onChange() {
        setUsers(userStore.getDetailUsers());
    }
    return (
        <div className="main__list">

            <ul className="user-list">{actualUsersList}</ul>

        </div>
    );


}
export default ListUsers;