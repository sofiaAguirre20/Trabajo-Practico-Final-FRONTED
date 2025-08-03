import React, { useState } from 'react'
import ICONS from '../../Constants/Icons'
import './FilteredContact.css'
import { getContactList } from '../../services/contactServices'



const FilteredContact = ({ contacts_list, contacts, setContacts }) => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {

        console.log('VALUEEEEEEEEEEE', event.target.value);
        setInputValue(event.target.value);


        // const contacts = getContactList()

        if (event.target.value) {
            const filtered_contacts = contacts.filter((contact) => {
                const filter_text = event.target.value;
                const contact_name = contact.name

                return contact_name.toLocaleLowerCase().includes(filter_text.toLowerCase().trim())

            })

            console.log('FILTEREDDDDDDDDDDDD', filtered_contacts);

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