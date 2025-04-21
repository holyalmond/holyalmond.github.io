import './Contacts.css'

function Contacts() {
    return (
        <>
        <div className="contacts">
            <h3 id="contacts" className='zetta'>contacts</h3>
            <div className="terminal">
                <span className="command">$ <span className="highlight-orange">contact </span><span className="highlight-pink">--me </span></span>
                <div className="output">
                    <p>{'>'} <span className='highlight-teal'>email</span> <a href="mailto:almondawwawa@gmail.com">almondawwawa@gmail.com</a></p>
                    <p>{'>'} <span className='highlight-teal'>github</span> <a href="https://github.com/holyalmond" target='_blank'>github.com/holyalmond</a></p>
                    <p>{'>'} <span className='highlight-teal'>telegram</span> <a href="https://t.me/almondcode" target="_blank" rel="noopener noreferrer">@almondcode</a></p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contacts
