import './MessageHeader.css'
const MessageHeader = ({contactData}) =>{



    return(
        <div className="message-header">
            <span className="contact-name">
                {contactData.name}
            </span>
            <div >
                <img src={contactData.avatar} className="contact-photo"/>
            </div>
        </div>
    )
}

export default MessageHeader