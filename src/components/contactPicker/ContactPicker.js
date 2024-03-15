import React from "react";

export const ContactPicker = (props) => {
  const contacts = props.contacts.map((detail, index) => {
    return <option key={index+1} value={detail.name}>{detail.name}</option>
  })

  return (
    <>
      <select required name="contactName" onChange={props.setContact}>
        <option key='0' value=''>No Contact Selected</option>
        {contacts}
      </select>
    </>
  );
};
