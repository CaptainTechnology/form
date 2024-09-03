import React, { useState } from 'react';
// import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons if needed
import './Form.css'; // Import your stylesheet
import axios from 'axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormValidation = () => {
  const backend=process.env.REACT_APP_BACKEND_URL;
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    contact: '',
    email: '',
    message: '',
    submit: ''
  });

  // Validation functions
  const validateName = () => {
    if (name.length === 0) {
      setErrors(prevErrors => ({ ...prevErrors, name: 'Name is required' }));
      return false;
    }
    if (!/^[a-zA-Z]+ [a-zA-Z]+$/.test(name)) {
      setErrors(prevErrors => ({ ...prevErrors, name: 'Write full name' }));
      return false;
    }
    setErrors(prevErrors => ({ ...prevErrors, name: '<i class="bi bi-check-circle-fill"></i>' }));
    return true;
  };

  const validateContact = () => {
    if (contact.length === 0) {
      setErrors(prevErrors => ({ ...prevErrors, contact: 'Phone is required' }));
      return false;
    }
    if (contact.length !== 10) {
      setErrors(prevErrors => ({ ...prevErrors, contact: 'Phone should be 10 digits' }));
      return false;
    }
    if (!/^[0-9]{10}$/.test(contact)) {
      setErrors(prevErrors => ({ ...prevErrors, contact: 'Only digits please' }));
      return false;
    }
    setErrors(prevErrors => ({ ...prevErrors, contact: '<i class="bi bi-check-circle-fill"></i>' }));
    return true;
  };

  const validateEmail = () => {
    if (email.length === 0) {
      setErrors(prevErrors => ({ ...prevErrors, email: 'Email is required' }));
      return false;
    }
    if (!/^[A-Za-z._\-[0-9]+@[A-Za-z]+\.[a-z]{2,4}$/.test(email)) {
      setErrors(prevErrors => ({ ...prevErrors, email: 'Email invalid.' }));
      return false;
    }
    setErrors(prevErrors => ({ ...prevErrors, email: '<i class="bi bi-check-circle-fill"></i>' }));
    return true;
  };

  const validateMessage = () => {
    const required = 30;
    const left = required - message.length;
    if (left > 0) {
      setErrors(prevErrors => ({ ...prevErrors, message: `${left} more characters required` }));
      return false;
    }
    setErrors(prevErrors => ({ ...prevErrors, message: '<i class="bi bi-check-circle-fill"></i>' }));
    return true;
  };

  const validateForm = () => {
    const isNameValid = validateName();
    const isContactValid = validateContact();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (!isNameValid || !isContactValid || !isEmailValid || !isMessageValid) {
      setErrors(prevErrors => ({ ...prevErrors, submit: 'Please fix errors before submitting' }));
      setTimeout(() => setErrors(prevErrors => ({ ...prevErrors, submit: '' })), 3000);
      return false;
    }
    return true;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form data
      const data=
        {
            "name": name,
            "contact": contact,
            "email_address": email,
            "address": message
        }
      console.log(data)
    try {
        const response = await axios.post(`${backend}/save`, data, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log('Response:', response.data);
        toast.success("data is stored")
      } catch (error) {
        console.error('Error sending data:', error);
        toast.error("Server is down");
      }
    }
  };

  return (

    <div className="container">
      <form className="form"  onSubmit={handleSubmit}>
        <i className="bi bi-telegram bi-whatsapp" style={{color:"green",background:"white",cursor:'pointer'}} onClick={()=>{
          const phoneNumber="8858258387";
          const encodedMessage="Hello Mohammad Anees, How are you "
          const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
          window.open(url, '_blank');
        }}></i>
        <div className="input-group">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyUp={validateName}
          />
          <span dangerouslySetInnerHTML={{ __html: errors.name }}></span>
        </div>

        <div className="input-group">
          <label>Phone No.</label>
          <input
            type="number"
            placeholder="8858258387"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            onKeyUp={validateContact}
          />
          <span dangerouslySetInnerHTML={{ __html: errors.contact }}></span>
        </div>

        <div className="input-group">
          <label>Email Id</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyUp={validateEmail}
          />
          <span dangerouslySetInnerHTML={{ __html: errors.email }}></span>
        </div>

        <div className="input-group">
          <label>Your Message</label>
          <textarea
            rows="5"
            placeholder="Enter your message"
            style={{ resize: 'none' }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyUp={validateMessage}
          ></textarea>
          <span dangerouslySetInnerHTML={{ __html: errors.message }}></span>
        </div>

        <button type="submit">Submit</button>
        <span dangerouslySetInnerHTML={{ __html: errors.submit }}></span>
      </form>
    </div>
  );
};

export default FormValidation;
