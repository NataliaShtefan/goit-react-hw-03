import s from "./Contact.module.css"
import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ firstName, number}) => {
  return (
    <>
    <div className={s.item}>
      <p> <FaUserAlt  className={s.icon}/> {firstName}</p>
      <p> <FaPhone className={s.icon}/> {number}</p>
      </div>
      <button className={s.btn}>Delete</button>
    </>
  )
}

export default Contact
