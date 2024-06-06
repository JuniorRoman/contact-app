import React, { useState } from "react";

const ContactForm = ({ addContact, onCancel }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ name, username, phone });
    setName("");
    setUsername("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Ім'я:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Прізвище:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Телефон:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit">Зберегти</button>
        <button type="button" onClick={onCancel}>
          Скасувати
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
