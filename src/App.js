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
    onSubmit: (values) => {
      alert("Login Successful!!");
    },
    validate: values => {
      let errors = {};
      if((!values.password)) errors.password = 'Field required';

      if (!values.email) errors.email = 'Field required';
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
        errors.email = 'Username should be an email'
      ))
      return errors;
    }
    
  });
  return (
    <div>
    <form onSubmit={formik.handleSubmit}>
      <div>Email</div>
      <input 
      type="text" 
      name="email" 
      id="emailField" 
      onChange={formik.handleChange} 
      value={formik.values.email}
      title="Username should be an email"
      />
      {formik.errors.email ? <div id="emailError" style={{color: 'red'}}> {formik.errors.email}</div> : null}
      <div>Password</div>
      <input type="text" 
      name="password" 
      id ="pswField" 
      onChange={formik.handleChange} 
      value={formik.values.password}
      />
      {formik.errors.password ? <div id ="pswError" style={{color: 'red'}}> {formik.errors.password}</div> : null}
      <button type="submit" id="submitBtn">Submit</button>
  </form>
    </div>
  );
}

export default App;





