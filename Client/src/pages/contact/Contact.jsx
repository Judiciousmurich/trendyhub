import { Link } from "react-router-dom";
import locationIcon from "../images/location_icon.png";
import mailIcon from "../images/mail_icon.png";
import phoneIcon from "../images/phone_icon.png";
import timeIcon from "../images/time_icon.png";

const ContactPage = () => {
  return (
    <>
      <div className="contact_banner">
        <div>
          <h1>Contact Us</h1>
          <i>
          <Link to="/">Home</Link> / Contact Us
          </i>
        </div>
      </div>
      <div className="contact">
        <div className="service">
          <div className="service_img">
            <div>
              <img src={locationIcon} alt="Location" />
              <p>county Kirinyaga  kerugoya kutus</p>
            </div>
            <div>
              <img src={mailIcon} alt="Email" />
              <p>contact@dreamhouse.com</p>
            </div>
            <div>
              <img src={phoneIcon} alt="Phone" />
              <p>(+254) 67453456789</p>
            </div>
            <div>
              <img src={timeIcon} alt="Time" />
              <p>7 Days / 24 Hour a Day</p>
            </div>
          </div>
        </div>
      </div>
      <div className="main_contact">
        <div className="map">
        <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3997.2206226128244!2d34.75716801427406!3d-0.08665449921950933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182a58aece8e9003%3A0xd7416e62f9f3ef1e!2sKisumu%2C%20Kenya!5e0!3m2!1sen!2snp!4v1648541159647!5m2!1sen!2snp"
      width="100%"
      height="550"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Rental Location Map"
    ></iframe>
        </div>
        <div className="contact_form">
          <form>
            <h1>Drop a Line</h1>
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" /><br />
            <textarea placeholder="Message"></textarea>
            <a href="" className="btn" type="submit">
              Submit
            </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
