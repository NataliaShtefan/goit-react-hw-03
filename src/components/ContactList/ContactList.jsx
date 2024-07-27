import Contact from "../Contact/Contact"
import s from "./ContactList.module.css"



const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={s.contacts}>
      {contacts.map(contact => 
        (<li className={s.contact} key={contact.id}>
            < Contact firstName={contact.name} number={contact.number} id={contact.id} deleteContact={deleteContact}/>
        </li>)
      )}
    </ul>
  )
}

export default ContactList
