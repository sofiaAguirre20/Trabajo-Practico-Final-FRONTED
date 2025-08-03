import ICONS from '../../Constants/Icons'
import './AnyMessage.css'


const AnyMessage = () => {


    return (
        <div className='message-container any-message'>
            <div className='any-message-data'>
                <p><ICONS.padlock className='padlock-icon' />Los mensajes y las llamadas estan cifrados de extremo a extremo. Nadie fuera de este chat, ni siquiera WhatsApp, puede leerlos ni escucharlos</p>
            </div>
            
        
        </div>


    )



}

export default AnyMessage