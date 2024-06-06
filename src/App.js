import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setContacts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const addContact = (contact) => {
    const newContact = { ...contact, id: Date.now() };
    setContacts([...contacts, newContact]);
    setShowForm(false);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div>
      <h1>Контактний додаток</h1>
      <ContactList contacts={contacts} onDelete={deleteContact} />
      {showForm ? (
        <ContactForm
          addContact={addContact}
          onCancel={() => setShowForm(false)}
        />
      ) : (
        <button onClick={() => setShowForm(true)}>Додати новий контакт</button>
      )}
    </div>
  );
};

export default App;
