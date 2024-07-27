import s from "./Contact.module.css"
import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Contact = ({ firstName, number, id, deleteContact}) => {
  return (
    <>
    <div className={s.item}>
      <p> <FaUserAlt  className={s.icon}/> {firstName}</p>
      <p> <FaPhone className={s.icon}/> {number}</p>
      </div>
      <button onClick={() => deleteContact(id)} className={s.btn}>Delete</button>
    </>
  )
}

export default Contact
