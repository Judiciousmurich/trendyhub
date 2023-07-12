
import './about.css';
import videoAboutApp from '../img/1.mp4';
import { Link } from 'react-router-dom';
const About = () => {
    return (
      <section id="about-app" className="section-p1">
        <h1>view<Link to="/login">App</Link></h1>
        <div className="video">
          <video autoPlay muted loop src={videoAboutApp}></video>
        </div>
      </section>
    );
  };
export default About;
