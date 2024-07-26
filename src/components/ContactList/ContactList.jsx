import Contact from "../Contact/Contact"
import s from "./ContactList.module.css"



const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={s.contacts}>
      {contacts.map(contact => 
        (<li className={s.contact} key={contact.id}>
            < Contact firstName={contact.name} number={contact.number} deleteContact={deleteContact}/>
            <button onClick={() => deleteContact(contact.id)} className={s.btn}>Delete</button>
        </li>)
      )}
    </ul>
  )
}

export default ContactList
