import React, { useState, useEffect } from "react";
import usePhoneBookStore from "../stores/usePhoneBook";
import ContactSearch from "./ContactSearch";

const ContactList = () => {
  const { phoneBook, deleteContact } = usePhoneBookStore();
  const [searchName, setSearchName] = useState("");
  const [activeEdit, setActiveEdit] = useState(false);
  const [checkedContact, setCheckedContact] = useState([]);

  let filteredPhoneBook = phoneBook.filter((item) =>
    item.name.toLowerCase().includes(searchName.toLowerCase())
  );

  const toggleEditContact = () => {
    setActiveEdit((prev) => !prev);
    if (activeEdit) setCheckedContact([]);
  };

  const isCheck = (e, id) => {
    // 클릭된 체크박스 아이디만 가져올 것.
    if (e.target.checked) {
      // 체크되면 해당 아이디 추가.
      setCheckedContact((prev) => [...prev, id]);
    } else {
      // 체크 해제 되면 해당 아이디 제거. false면->제외.
      setCheckedContact((prev) => prev.filter((item) => item !== id));
    }
  };

  const handleDeleteContact = () => {
    if (checkedContact.length === 0) {
      alert("Please select the contact number to delete.");
      return;
    }
    // 상태 업데이트.
    deleteContact(checkedContact);
    setCheckedContact([]);
  };

  return (
    <div className="contactList-container">
      <ContactSearch searchName={searchName} setSearchName={setSearchName} />
      <h5>num: {filteredPhoneBook.length}</h5>
      {filteredPhoneBook.map((item) => (
        <div key={item.id} className="contactList-wrap">
          <p>
            {item.name} : {item.phoneNumber}
          </p>
          {activeEdit && (
            <input
              type="checkbox"
              checked={checkedContact.includes(item.id)}
              onChange={(e) => isCheck(e, item.id)}
            />
          )}
        </div>
      ))}
      <div className="contactList-actions">
        <button onClick={toggleEditContact}>
          {activeEdit ? "Cancel" : "Edit"}
        </button>
        <button onClick={handleDeleteContact} disabled={!activeEdit}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactList;
