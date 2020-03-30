import React from 'react';
import './Contact.css';

function Contact(){
    return (
        <div className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/women/35.jpg" alt="avatar"></img>
            <div>
                <p className="name">Annette Lopez</p>
                <p className="status"><span className="status-online"></span>Online</p>
            </div>
        </div>
    )
}

export default Contact;