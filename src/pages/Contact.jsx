import React from 'react';
import { useState } from 'react';
function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

  return (
    <div>
        <div>
      <h1>Contact Us</h1>
      <h2>We Are Committed to processing the information in order to contact you and talk about your project</h2>
        </div>

    
      
    </div>
  );
}

export default Contact;