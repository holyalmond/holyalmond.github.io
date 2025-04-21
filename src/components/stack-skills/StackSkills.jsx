import './StackSkills.css'

function StackSkills() {
    return (
        <>
        <div className="stack-skills">
            <h3 id="stack-skills" className='zetta'>stack&skills</h3>
            <div className="terminal">
                <span className="command">$ <span className="highlight-orange">stack </span><span className='highlight-pink'>--languages</span></span>
                <div className="output">
                    <p>{'>'} Python, C++</p>
                </div>
                <span className="command">$ <span className="highlight-orange">stack </span><span className='highlight-pink'>--frameworks</span></span>
                <div className="output">
                    <p>{'>'} FastAPI, Django, SQLAlchemy, Redis, RabbitMQ</p>
                </div>
                <span className="command">$ <span className="highlight-orange">stack </span><span className='highlight-pink'>--databases</span></span>
                <div className="output">
                    <p>{'>'} PostgreSQL, SQLite</p>
                </div>
                <span className="command">$ <span className="highlight-orange">stack </span><span className='highlight-pink'>--other</span></span>
                <div className="output">
                    <p>{'>'} Docker, Git, REST API, Linux (Arch)</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default StackSkills