import ICONS from '../../Constants/Icons'
import './FilteredContact.css'


const FilteredContact = () =>{

    return(

        <form className='filter-contact'>
            <label htmlFor='filter' className='label-filter'></label>
            <div className='search-icon-container'><ICONS.searchContact className='search-icon'/></div>
            <input type='text' placeholder='Buscar un chat o iniciar uno nuevo' id='filter' name='filtered-contact' autoComplete='off' required/>
        </form>
    )

}

export default FilteredContact