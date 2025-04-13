import React, { useState } from "react";
import usePhoneBookStore from "../stores/usePhoneBook";
import ContactSearch from "./ContactSearch";

const ContactList = () => {
  const { phoneBook } = usePhoneBookStore();
  const [searchName, setSearchName] = useState("");

  const filteredPhoneBook = phoneBook.filter((item) =>
    item.name.toLowerCase().includes(searchName.toLowerCase())
  );
  return (
    <div className="contactList-container">
      <ContactSearch searchName={searchName} setSearchName={setSearchName} />
      <h5>num: {filteredPhoneBook.length}</h5>
      {filteredPhoneBook.map((item) => (
        <div key={item} className="contactList-wrap">
          <p>
            {item.name} : {item.phoneNumber}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
