import React from "react";
import "./Contact.css";
import msg_icon from "../../assest/msg-icon.png";
import mail_icon from "../../assest/mail-icon.png";
import phone_icon from "../../assest/phone-icon.png";
import loaction_icon from "../../assest/location-icon.png";
import white_arrow from "../../assest/white-arrow.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact fprm or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us aw we strive to provide exceptional server to our in
          university community
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" /> Contact@Gamjoly.com
          </li>
          <li>
            <img src={phone_icon} alt="" /> +380 66-250-96-24
          </li>
          <li>
            <img src={loaction_icon} alt="" />
            77 Massachusetts Ave, Cambridge <br /> MA 02139, United State
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Your Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            id=""
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        {/* <span>sending</span> */}
      </div>
    </div>
  );
};

export default Contact;
