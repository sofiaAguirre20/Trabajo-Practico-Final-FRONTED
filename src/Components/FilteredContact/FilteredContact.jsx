import ICONS from '../../Constants/Icons'
import './FilteredContact.css'
import { getContactList } from '../../services/contactServices'



const FilteredContact = (contact_selected) =>{

   const contacts = getContactList()

    const filtered_contacts = contacts.filter((contact) => {
        const filter_text = ""
        const contact_name = contact.name

        return contact_name.toLocaleLowerCase().includes(filter_text.toLowerCase().trim())

    })
    return(

        <form className='filter-contact'>
            <label htmlFor='filter' className='label-filter'></label>
            <div className='search-icon-container'><ICONS.searchContact className='search-icon'/></div>
            <input  type='text' placeholder='Buscar un chat o iniciar uno nuevo' id='filter' name='filtered-contact' autoComplete='off' required/>
        </form>
    )

}

export default FilteredContact