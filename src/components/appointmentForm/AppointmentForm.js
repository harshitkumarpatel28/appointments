import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-UK")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
      <form className="appointmentForm" onSubmit={handleSubmit}>
        <label htmlFor="contactTitle">Title: </label>
        <input required onChange={(e) => setTitle(e.target.value)} type="text" className="contactTitle" id="contactTitle" value={title} />
        <br/>
        <label htmlFor="contact">Contact: </label>
        {/* <input onChange={setContact} type="text" className="contactContact" id="contact" value={contact} /> */}
        <ContactPicker name={title} contacts={contacts} value={contact} onChange={(e) => setContact(e.target.value)} />
        <br/>
        <label htmlFor="contactDate">Date: </label>
        <input required onChange={(e) => setDate(e.target.value)} type="date" className="contactDate" id="contactDate" value={date} />
        <br/>
        <label htmlFor="contactTime">Time: </label>
        <input required onChange={(e) => setTime(e.target.value)} type="time" className="contactTime" id="contactTime" value={time} />
        <br/>
        <input type="submit" className="AppointmentSubmit" value="Save Appointment" />
      </form>
    </>
  );
};
