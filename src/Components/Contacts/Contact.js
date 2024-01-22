import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import { PREFIX_URL, BASE_URL } from "../../contant";
import { toast } from "react-toastify";

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

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    // Check if name is empty
    if (!formData.name.trim()) {
      errors.name = "Name is required";
      formIsValid = false;
    }

    // Check if email is empty or not valid
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      formIsValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.email = "Invalid email address";
        formIsValid = false;
      }
    }

    // Check if phoneNumber is empty or not valid
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
      formIsValid = false;
    } else {
      // Check if phoneNumber contains only numbers
      const phoneNumberRegex = /^\d+$/;
      if (!phoneNumberRegex.test(formData.phoneNumber)) {
        errors.phoneNumber = 'Phone number should contain only numbers';
        formIsValid = false;
      }
    }

    // Check if message is empty
    if (!formData.message.trim()) {
      errors.message = "Message is required";
      formIsValid = false;
    }

    // Update state with errors
    setFormErrors(errors);

    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    const formIsValid = validateForm();

    // If form is not valid, don't submit
    if (!formIsValid) {
      toast.error("You Need to fill all the form details correctly.");
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
      return;
    }

    try {
      // Your axios post request here
      const response = await axios.post(BASE_URL + "create-contact-details", {
        clientName: formData.name,
        clientEmail: formData.email,
        clientPhoneNumber: formData.phoneNumber,
        clientMessage: formData.message,
      });
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      });

      toast.success("Thanks for your response", toastStyle);
    } catch (error) {
      toast.error("Error submitting form:", error);
    }
  };

  const encodedMessage = encodeURIComponent(
    "Hi, I'm messaging you by seeing your Jewellery Website"
  );
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
        <a
          className="logo-items"
          href={`mailto:karishmamohammed43@gmail.com`}
          target="_blank"
        >
          <img src={`${PREFIX_URL}jewellery-email-logo.png`} alt="Gamil" />
          <span>Gmail</span>
        </a>
        <a className="logo-items" href={whatsappMessage} target="_blank">
          <img src={`${PREFIX_URL}whatsapp-logo.png`} alt="googleMap" />
          <span>WhatsApp</span>
        </a>
        <a
          className="logo-items"
          href="https://g.co/kgs/ifKyNGU"
          target="_blank"
        >
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
