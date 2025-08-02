import './MessageHeader.css'
const MessageHeader = ({contactData}) =>{



    return(
        <div className="message-header">
            <div className='contact-data'>
                <span className="contact-name">{contactData.name}</span>
                <span className='contact-status'>{contactData.connection_status}</span>
            </div>

            <div >
                <img src={contactData.avatar} className="contact-photo"/>
            </div>
        </div>
    )
}

export default MessageHeader