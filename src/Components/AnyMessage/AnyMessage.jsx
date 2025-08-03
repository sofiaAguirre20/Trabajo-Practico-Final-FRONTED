import ICONS from '../../Constants/Icons'
import './AnyMessage.css'
import Message from '../Message/Message';

const AnyMessage = () => {
    

    return (
        <div className={'message-container'}>

            <div className={'other-message-data'}>
                <span className='text'>lalalla</span>
                <span className='time'>789</span>



            </div>
        </div>
    )



}

export default AnyMessage

// <div className=' any-message'>
//     <div><ICONS.padlock className='padlock-icon'/></div>
//     <p>Los mensajes y las llamadas estan cifrados de extremo a extremo. Nadie fuera de este chat, ni siquiera WhatsApp, puede leerlos ni escucharlos</p>
// </div>