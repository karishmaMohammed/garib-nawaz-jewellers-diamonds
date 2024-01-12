import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import { PREFIX_URL, BASE_URL } from "../../contant";
import { toast } from 'react-toastify';

const toastStyle = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  pauseOnHover: true,
  draggable: true,
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(BASE_URL + "create-contact-details", {
        clientName: formData.name,
        clientEmail: formData.email,
        clientPhoneNumber: formData.phoneNumber,
        clientMessage: formData.message,
      });
      console.log(response.data);
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
      toast.success("Thanks for your response", toastStyle);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const encodedMessage = encodeURIComponent(
    "Hi, I'm messaging you by seeing your portfolio"
  );
  // const whatsappMessage = `https://wa.me/+918309035246?text=${encodedMessage}`;
  const whatsappMessage = `https://wa.me/+919848424401?text=${encodedMessage}`;

  return (
    <div className="contact-page" id="contact">
      <div className="contact-logos">
        <div className="visiting-logo-items">
          <img src={`${PREFIX_URL}visiting-card.jpg`} alt="visiting card" />
        </div>
        {/* <a className="logo-items" href={`tel:8309035246`} target="_blank"> */}
        <a className="logo-items" href={`tel:9848424401`} target="_blank">
          <img src={`${PREFIX_URL}phone-call-logo.png`} alt="googleMap" />
          <span>Phone Call</span>
        </a>
        <a className="logo-items" href={`mailto:karishmamohammed43@gmail.com`} target="_blank">
          <img src={`${PREFIX_URL}jewellery-email-logo.png`} alt="Gamil" />
          <span>Gmail</span>
        </a>
        <a className="logo-items" href={whatsappMessage} target="_blank">
          <img src={`${PREFIX_URL}whatsapp-logo.png`} alt="googleMap" />
          <span>WhatsApp</span>
        </a>
        <a className="logo-items" href="https://g.co/kgs/ifKyNGU" target="_blank">
          <img src={`${PREFIX_URL}google-map-location.png`} alt="googleMap" />
          <span>Google Map</span>
        </a>
      </div>
      <div className="contact-form">
        <form className="contact" onSubmit={handleSubmit}>
          <div className="contact-name">
            <span>Name :</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Please enter your name"
            />
          </div>
          <div className="contact-name">
            <span>Email :</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Please enter your email"
            />
          </div>
          <div className="contact-name">
            <span>Phone Number :</span>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Please enter your phone number"
            />
          </div>
          <div className="contact-message">
            <span>Message :</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
            />
          </div>
          <div className="submit-btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
