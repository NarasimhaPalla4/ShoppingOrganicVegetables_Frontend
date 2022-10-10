import about from './about.jpg';
import './AboutUs.css';
const AboutUs =() =>{
    return( 
    
        <div className="section">
            <div>
                <center><h1> About Us </h1></center>
            </div>
            <div className="image-section">
                <img src={about} alt=""></img>
            </div>
            <div className="about-content">
                <div className='mission'>
                    <h3>Mission</h3>
                    <p>To help people live a better, healthier, and wholesome life by providing them 
                        with 100% certified, authentic Organic Vegetables.</p> </div>
                <div className='vision'>
                    <h3>Vision</h3>
                    <p>To be the leading brand of Organic Vegetables in India.</p>
                <p>To give back to the environment and advance on a path to sustainability.
            <p>To make consumers aware of the benefits of organic food by giving them healthy choices of 
            eating.</p></p>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;