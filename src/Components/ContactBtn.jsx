import React from 'react';
import '../Styles/contactBtn.scss'

function ContactBtn({ text, number }) {
  return (
    <div className='contact-div'>
    <a className='contactBtn' href={`tel:${number}`}>{text}</a>
    </div>
  );
}

export default ContactBtn;
