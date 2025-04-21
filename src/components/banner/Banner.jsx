import './Banner.css'
import bannerImg from '../../assets/1.png'

function Banner() {
    return (
        <>
        <div className="banner">
            <div className="text">
                <h1>Hi, I'm <span>Egor</span></h1>
                <p>Aspiring backend developer</p>
            </div>
            <div className="image">
                <img src={bannerImg} alt="lain" className='banner-img'/>
            </div>
        </div>
        </>
    )
}

export default Banner