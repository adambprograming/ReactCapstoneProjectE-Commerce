'use client'
import "./sign-up-form.styles.scss";

import { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  // aktualni hodnota, funkce na nastaveni hodnoty, default hodnota
  const [formFields, setFormFields] = useState(defaultFormFields);
  //   deconstruct, aby se mohlo pouzivat rovnou displayName a ne formFields.displayName
  const { displayName, email, password, confirmPassword } = formFields;

  // resetuje FormFields
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  // funkce k submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      // funkce z firebase.utils.js, ktera nam vytvori auth(access token) pro daneho uzivatele
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      // funkce z firebase.utils.js, ktera nam vytvori v databazi documnent s uzivatelem pokud uz email neni obsazeny
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
