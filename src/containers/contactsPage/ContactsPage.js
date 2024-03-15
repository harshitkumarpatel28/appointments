import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');
 const [submit, setSubmit] = useState(0);
 const contactList = props.contactList;
 const saveContact = props.saveContact;

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    setName(e.target.contactName.value);
    setPhone(e.target.contactPhone.value);
    setEmail(e.target.contactEmail.value);
    setSubmit((prevCount) =>  prevCount + 1);

    const duplicateName = contactList.find((contacts) => contacts['name'] === e.target.contactName.value);
    if(duplicateName === undefined) {
      const addObj = {
        'name': e.target.contactName.value,
        'phone': e.target.contactPhone.value,
        'email':e.target.contactEmail.value
      };
  
      saveContact(addObj);
      setName('');
      setPhone('');
      setEmail('');
      e.target.contactName.value = '';
      e.target.contactPhone.value = '';
      e.target.contactEmail.value = '';
    }
   
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    const duplicateName = contactList.find((contacts) => contacts['name'] === document.getElementById('contactName').value);
    if(duplicateName && document.getElementById('contactName').value !== '') {
      alert('Contact name already exists!');
    }
  }, [submit]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm handleSubmit={handleSubmit}
          name={name} phone={phone} email={email}
          setName={setName} setPhone={setPhone} setEmail={setEmail}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contactList} />
      </section>
    </div>
  );
};
