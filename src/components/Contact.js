import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
    <div className='Contact'>
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Your name.." />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Your email.." />

      <label htmlFor="subject">Subject</label>
      <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

      <input type="submit" value="Submit" />
    </form>
    </div>
  );
}

export default ContactForm;
