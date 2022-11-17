import { useState } from "react";

import FromInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";



import {SignUp, H2} from './sign-up-form.styles.jsx'

const defaulFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaulFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  //console.log(formFields)

  const resetFields = () => {
    setFormFields(defaulFormFields)
  }

  const handelSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password,
        
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFields()
    } catch (error) {
      console.log(error);
      if(error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use')
      }
      else{
        console.log(error)
      }
    }
  };

  const handelChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUp>
    <H2>Don't have an account?</H2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handelSubmit}>
        <FromInput
          label= "Display Name"
          type="text"
          required
          onChange={handelChange}
          name="displayName"
          value={displayName}
        />

        <FromInput
          label= "Email"
          type="email"
          required
          onChange={handelChange}
          name="email"
          value={email}
        />


        <FromInput
        label= "Password"
          type="password"
          required
          onChange={handelChange}
          name="password"
          value={password}
        />

        <FromInput
        label= "Confirm Password"
          type="password"
          required
          onChange={handelChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </SignUp>
  );
};

export default SignUpForm;
