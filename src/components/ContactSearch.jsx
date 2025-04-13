import React, { useState } from "react";

const ContactSearch = ({ searchName, setSearchName }) => {
  const handleSearchByName = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form className="contactSearch-wrap" onSubmit={handleSearchByName}>
        <input
          type="name"
          placeholder="Search by name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default ContactSearch;
