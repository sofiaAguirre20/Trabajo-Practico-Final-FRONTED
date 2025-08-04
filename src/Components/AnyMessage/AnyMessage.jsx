import ICONS from '../../Constants/Icons'
import './AnyMessage.css'


const AnyMessage = () => {


    return (
        <div className='message-container any-message'>
            <div className='any-message-data'>
                <p><ICONS.padlock className='padlock-icon' />Los mensajes y las llamadas estan cifrados de extremo a extremo. Solo las personas en este chat pueden leerlos, escucharlos o compartirlos</p>
            </div>


        </div>


    )



}

export default AnyMessage