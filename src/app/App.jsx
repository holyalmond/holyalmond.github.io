import './App.css'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'
import AboutMe from '../components/about-me/AboutMe'
import StackSkills from '../components/stack-skills/StackSkills'
import Projects from '../components/projects/Projects'
import Contacts from '../components/contacts/Contacts'
import Footer from '../components/footer/Footer'
import footerImg from '../assets/2.png'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <AboutMe />
      <StackSkills />
      <Projects />
      <Contacts />
      <Footer />

      <a href="#top"><img src={footerImg} alt="Go to top" className="footer-img" /></a>
    </>
  )
}

export default App
