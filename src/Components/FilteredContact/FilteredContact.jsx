import React, { useState } from 'react'
import ICONS from '../../Constants/Icons'
import './FilteredContact.css'



const FilteredContact = ({ contacts_list, contacts, setContacts }) => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        const { target } = event;
        const { value: nameValue } = target;
        setInputValue(nameValue);




        if (nameValue) {
            const filtered_contacts = contacts.filter((contact) => {
                const filter_text = nameValue;
                const contact_name = contact.name

                return contact_name.toLocaleLowerCase().includes(filter_text.toLowerCase().trim())

            })



            setContacts(filtered_contacts)
        } else {
            setContacts(contacts_list)
        }
    };




    return (

        <form className='filter-contact'>
            <label htmlFor='filter' className='label-filter'></label>
            <div className='search-icon-container'><ICONS.searchContact className='search-icon' /></div>
            <input type='text' value={inputValue}
                onChange={(e) => handleChange(e)} placeholder='Buscar un chat o iniciar uno nuevo' id='filter' name='filtered-contact' autoComplete='off' required />
        </form>
    )

}

export default FilteredContact