import './AboutMe.css'

function AboutMe() {
    return (
        <>
        <div className="about-me">
            <h3 id="about-me" className='zetta'>about-me</h3>
            <div className="terminal">
                <span className="command">$ <span className="highlight-orange">whoami</span></span>
                <div className="output">
                    <p>{'>'} 16 y.o. first-year student @ Sirius University College</p>
                    <p>{'>'} Passionate about backend development</p>
                    <p>{'>'} Not quite a junior dev (yet), but getting there</p>
                    <p>{'>'} Always curious, always building</p>
                    <p>{'>'} Focused on backend fundamentals and hands-on project experience</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutMe