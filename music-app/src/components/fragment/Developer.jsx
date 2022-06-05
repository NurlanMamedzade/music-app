import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/avatar.jpg";
import {Facebook, Instagram} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developer</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Nurlan Mammadzadeh</h3>
                        <p>Junior Front End developer</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>A Computer Science Student at ASOIU, Baku.</p>
                    <p>I love designing fully responsive websites.</p>
                    <p>I have a keen interest in developing projects, whenever I want to learn something new.</p>
                    <p>This site contains songs that I love to listen to. You can enjoy listening to it.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"}  href={"https://www.facebook.com/profile.php?id=100007032135523"} title={"Nurlan Mammadzadeh"}>
                            <Facebook/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/nurlan_.17/"}  title={"nurlan_.17"}>
                            <Instagram/>
                        </IconButton>
                
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;