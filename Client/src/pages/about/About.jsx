
import './about.css';
import videoAboutApp from '../img/1.mp4';
import { Link } from 'react-router-dom';
import Clients from '../../shared/Clients';
const About = () => {
    return (
      <>
      <div className="bg-[#e2e2e2] w-screen p-16  mb-8 ">
      <i className="flex flex-col items-center w-full">
        <Link to="/" className=" text-[#666666]">Home / About</Link>
        <h1 className="font-bold text-4xl ">About</h1>
      </i>
    </div>
      <div className='flex mb-20'> 
      <div>
        <h1 className='text-[#f42c37] m-6 font-bold text-lg tracking-wide font-serif '>welcome to Trendyhub</h1>
        <h1 className='font-bold text-4xl m-6'>Who Are We?</h1>
        <p className='m-8 text-[#686868]'>When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray
        <br/>
        gleams steal into the inner sanctuary, I throw myself down among the tall  <br/>grass by the trickling stream; and, as I lie close to the earth, a thousand  <br/>unknown plants are noticed by me . <br/>
      when I hear the buzz of the little world among the stalks, and grow familiar  <br/>with the countless indescribable forms of the insects and flies, then I feel <br/> the presence .</p>
      <button className='bg-[#f42c37] px-6 py-2 text-white rounded-[20px] mx-20 '>Contact Us</button>
      </div>
      <section id="about-app" className="section-p1">
        
        <h1 className='font-bold text-3xl  '>view<Link to="/">App</Link></h1>
        <div className="video">
          <video autoPlay muted loop src={videoAboutApp}></video>
        </div>
      </section>
      </div>
      <Clients/>
      </>
   
    );
  };
export default About;
