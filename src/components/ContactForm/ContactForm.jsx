import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from 'yup';


const ContactForm = ({ addContact }) => {

 const registerSchema = Yup.object({
        name: Yup.string()
          .required('This field is required!')
          .min(3, 'To short')
          .max(50, 'Name must be less than 50 chars'),
    
        number: Yup.string()
          .required('This field is required!')
          .min(3, 'To short')
          .max(50, 'Name must be less than 50 chars'),
      });

    const initialValues = {
        name: '',
        number: '',
      };
    
      const handleSubmit = (data, actions) => {
        addContact(data);
       
        actions.resetForm();
      };
    

  return (
    <div className={s.container}>
      <Formik validationSchema={registerSchema} initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
            <label  className={s.label} >
                <span>Name</span>
                <Field 
                 name="name"
                className={s.input}> 
                </Field>
                <ErrorMessage name='name' component='span' className={s.error} />
            </label>
            <label  className={s.label} >
                <span>Number</span>
                <Field 
                 name="number"
                className={s.input}> 
                </Field>
                <ErrorMessage name='number' component='span' className={s.error} />
            </label>
            <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  )
}

export default ContactForm
