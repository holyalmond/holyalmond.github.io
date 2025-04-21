import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest('.links') && !event.target.closest('.hamburger')) {
                closeMenu()
            }
        }

        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [isMenuOpen])

    return (
        <>
            <div className="header">
                <div className="logo">
                    <span className='zetta'>almond</span>
                </div>
                <div className={`links ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#about-me" className="link" onClick={closeMenu}>about-me</a>
                    <a href="#stack-skills" className="link" onClick={closeMenu}>stack&skills</a>
                    <a href="#projects" className="link" onClick={closeMenu}>projects</a>
                    <a href="#contacts" className="link" onClick={closeMenu}>contacts</a>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    {!isMenuOpen ? (
                        <>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </>
                    ) : (
                        <div className="cross">
                            <div className="cross-line"></div>
                            <div className="cross-line"></div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Header