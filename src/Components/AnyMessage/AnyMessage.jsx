import ICONS from '../../Constants/Icons'
import './AnyMessage.css'
import Message from '../Message/Message';

const AnyMessage = () => {


    return (
        <div className=' any-message'>
            
            <p><ICONS.padlock className='padlock-icon' />Los mensajes y las llamadas estan cifrados de extremo a extremo. Nadie fuera de este chat, ni siquiera WhatsApp, puede leerlos ni escucharlos</p>
        
        </div>


    )



}

export default AnyMessage