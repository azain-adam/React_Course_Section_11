import React, { useEffect, useState } from "react";
import Card from "./Card";
import Button from "./Button";
import styles from "../css/Login.module.css";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 7);
  }, [enteredEmail, enteredPassword])

  const handleEmailChange = (event) => {
    setEnteredEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setEnteredPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  const handleValidateEmail = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const handleValidatePassword = () => {
    setPasswordIsValid(enteredPassword.trim().length > 7);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={handleSubmit}>
        <div
          className={` ${styles.control} ${
            emailIsValid === false ? styles.invalid : ""
          } `}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={handleEmailChange}
            onBlur={handleValidateEmail}
          />
        </div>
        <div
          className={`${styles.control} ${
            passwordIsValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={handlePasswordChange}
            onBlur={handleValidatePassword}
          />
        </div>
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
