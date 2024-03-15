import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
 const [title, setTitle] = useState('');
 const [name, setName] = useState('');
 const [date, setDate] = useState('');
 const [time, setTime] = useState('');
 const contactList = props.contactList;
 const appointmentList = props.appointmentList;
 const saveAppointment = props.saveAppointment;

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    const addObj = {
      'title': e.target.contactTitle.value,
      'name': e.target.contactName.value,
      'date':e.target.contactDate.value,
      'time':e.target.contactTime.value
    };

    saveAppointment(addObj);
    e.target.contactTitle.value = '';
    e.target.contactName.value = '';
    e.target.contactDate.value = '';
    e.target.contactTime.value = '';
  };

  const addTitle = (newTitle) => {
    setTitle(newTitle)
    return newTitle;
  }

  const addContact = (newContact) => {
    setName(newContact)
    return newContact;
  }
  
  const addDate = (newDate) => {
    setDate(newDate)
    return newDate;
  }

  const addTime = (newTime) => {
    setTime(newTime)
    return newTime;
  }

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm handleSubmit={handleSubmit}
          title={title} contacts={contactList} contact={name} date={date} time={time}
          setTitle={addTitle} setContact={addContact} setDate={addDate} setTime={addTime} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList contacts={appointmentList} />
      </section>
    </div>
  );
};