
import ContactList from "./ContactList/ContactList"
import contacts from "./contacts.json"








function App() {
  

  return (
    <div>
  <h1>Phonebook</h1>
  
  <ContactList contacts={contacts}/>
</div>
  )
}

export default App
