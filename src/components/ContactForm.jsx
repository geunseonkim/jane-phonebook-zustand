import React, { useState } from "react";
import usePhoneBookStore from "../stores/usePhoneBook";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { createContact } = usePhoneBookStore();

  const handleCreateContact = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    createContact(name, phoneNumber);
  };
  return (
    <div>
      <form className="contactForm-wrap" onSubmit={handleCreateContact}>
        <h3>Name</h3>
        <input
          type="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          onFocus={(e) => setName("")}
        />
        <h3>Phone Number</h3>
        <input
          type="number"
          placeholder="phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          onFocus={(e) => setPhoneNumber("")}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default ContactForm;
