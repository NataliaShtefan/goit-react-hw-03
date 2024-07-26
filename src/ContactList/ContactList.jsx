import Contact from "../Contact/Contact"
import s from "./ContactList.module.css"



const ContactList = ({ contacts }) => {
  return (
    <ul className={s.contacts}>
      {contacts.map(contact => 
        (<li className={s.contact} key={contact.id}>
            < Contact firstName={contact.name} number={contact.number} />
        </li>)
      )}
    </ul>
  )
}

export default ContactList
