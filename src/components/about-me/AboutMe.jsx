import './AboutMe.css'

function AboutMe() {
    return (
        <>
        <div className="about-me">
            <h3 id="about-me" className='zetta'>about-me</h3>
            <div className="terminal">
                <span className="command">$ <span className="highlight-orange">whoami</span></span>
                <div className="output">
                    <p>{'>'} {Math.floor((new Date() - new Date('2008-05-18')) / (1000 * 60 * 60 * 24 * 365.25))} y.o. first-year student @ Sirius University College</p>
                    <p>{'>'} Passionate about backend development</p>
                    <p>{'>'} Exploring machine learning and AI — currently learning and experimenting</p>
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