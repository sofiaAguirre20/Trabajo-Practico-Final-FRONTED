import React from 'react'
import './ContactItem.css'
import { Link } from 'react-router';
import ICONS from '../../Constants/Icons';


const ContactItem = ({ contact }) => {


    return (

        <Link to={`/contact/${contact.id}/messages`} className='contact' >

            <div className='contact'>
                <button className='button-deleteContact'><ICONS.DeleteContact className='button-delete'/></button>
                <div className='name-contact-container'>
                    <span>{contact.name}</span>
                </div>
                <div className='profile-photo-container'>
                    <img src={contact.avatar} className='profile-photo' />
                </div>

            </div>




        </Link >


    )
}

export default ContactItem