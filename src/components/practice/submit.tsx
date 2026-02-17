import {  type FormEvent } from 'react';

import './submit.css';

export const Submit = () => {
  const handleSend = (e:any) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };
    
    alert("Message sent!");
    console.log("Message sent:", data);
  };

  return (
    <form className="contact-form" onSubmit={handleSend}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required></textarea>
      </div>

      <button type="submit" className="submit-btn">Send</button>
    </form>
  );
};
