import React from "react";
// TODO: import useFormik from formik library
import './App.css';
import {useFormik} from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      console.log('form:', values);
    },
    validate: values => {
      let errors = {};
      if((!values.email) || (!values.password)) errors.email, errors.password = 'Field required';
      if(
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
          values.email
        ))  {
          errors.email = 'Invalid email address';
        }
      return errors;
    }
  });
  return (
    <div>
    <form onSubmit={formik.handleSubmit}>
      <div>Email</div>
      <input type="text" name="email" id="emailField" onChange={formik.handleChange} value={formik.values.email} pattern=".+@email\.com"/>
      {formik.errors.email ? <div style={{color: 'red'}}> {formik.errors.email}</div> : null}
      <div>Password</div>
      <input type="text" name="password" id ="pswField" onChange={formik.handleChange} value={formik.values.password}/>
      {formik.errors.password ? <div id ="pswError" style={{color: 'red'}}> {formik.errors.password}</div> : null}
      <button type="submit" id="submitBtn">Submit</button>
  </form>
    </div>
  );
}

export default App;

