import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form className="contactForm" onSubmit={handleSubmit}>
        <label htmlFor="contactName">Name: </label>
        <input required type="text" className="contactName" id="contactName" />
        <br/>
        <label htmlFor="contactPhone">Phone: </label>
        <input required pattern="[0-9]{5} [0-9]{6}" type="text" className="contactPhone" id="contactPhone" placeholder="format - xxxxx xxxxxx" />
        <br/>
        <label htmlFor="contactEmail">Email: </label>
        <input required type="text" className="contactEmail" id="contactEmail" />
        <br/>
        <input required type="submit" className="contactSubmit" value="Save Contact" />
      </form>
    </>
  );
};

