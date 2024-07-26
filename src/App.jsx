
import { useEffect, useState } from "react";
import ContactList from "./components/ContactList/ContactList"
import contactsName from "./contacts.json"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";










function App() {
  
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : contactsName;
  });
  
const [searchValue, setSearchValue] = useState('');
  


useEffect(() => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);


  const handleSearchChange = (value) => {
    setSearchValue(value);
  };
  
  const addContact = (contact) => {
    const newContact = { id: nanoid(), ...contact };
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

 
  return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm addContact={addContact}/>
  <SearchBox searchValue={searchValue} handleSearchChange={handleSearchChange}/>
  <ContactList contacts={filteredContacts} deleteContact={deleteContact}/>
</div>
  )
}

export default App
