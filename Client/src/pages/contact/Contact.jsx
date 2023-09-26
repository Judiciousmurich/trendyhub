import { Link } from "react-router-dom";

import './Contact.css'
import Clients from "../../shared/Clients";
import Service from "../../shared/Service";
const Contact = () => {
  return (
    <>
      <div className="bg-[#e2e2e2] w-screen p-16  mb-8 ">
        <i className="flex flex-col items-center w-full">
          <Link to="/" className=" text-[#666666]">Home / Contact Us</Link>
          <h1 className="font-bold text-4xl ">Contact Us</h1>
        </i>
      </div>


      <div className="main_contact">
        <div className="map mb-5">
          <iframe className="bg-white rounded "
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
          <form >
            <h1>Get In Touch</h1>
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" /><br />
            <textarea placeholder="Message"></textarea>
            <Link to="#">
              <button className="bg-[#f42c37] text-white px-6 py-2 rounded-[20px]">Submit</button>
            </Link>
          </form>
        </div>
      </div>
      {/* SERVICE PAGE */}
      <div className="flex gap-6 w-full justify-around mb-24 mt-14 ">
        <Service
          image="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/noun_Email_254038.svg"
          title="Email: Info@yourdomain.com"
          description="info@samplemail.com"
        />
        <Service
          image="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/noun_Phone_17950751.svg"
          title="Phone: +99 (0) 101 0000 888"
          description="+99 (0) 101 0000 888"
        />
        <Service
          image="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/10/noun_Location_19355641.svg"
          title="Address : Judicious M. 4401 Kirinyaga"
          description="Street Grapevine Nashville, Tx 76051"
        />

      </div>
      <Clients />""
    </>
  );
};

export default Contact;
