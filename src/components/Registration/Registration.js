import React, { useState } from "react"
import styles from './Registration.module.css'
import RegistrationButton from "./RegistrationButton"
import RegistrationInputs from "./RegistrationInputs"

const Registartion = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const onEmailCheck = () => userInfo.email.includes("@");
  const onFullNameCheck = () => {
    const regex = /^[a-zA-Z\s]{1,120}$/;
    return regex.test(userInfo.fullName);
  };
  const onPasswordCheck = () => userInfo.password.length >= 8;

  const printValues = (fullName, email, password) => {
    console.log(`fullName: ${fullName}, email: ${email}, password: ${password}`);
  };

  const onButtonSubmit = ({fullName, email, password}) => {
    if (!fullName || !email || !password) {
      alert("You should complete all fields");
    } else if (!onFullNameCheck()) {
      alert("FullName format is not correct");
    } else if (!onEmailCheck()) {
      alert("email format is not correct");
    } else if (!onPasswordCheck()) {
      alert("password is too short");
    } else {
      alert("Success");
    }
    printValues(fullName, email, password);
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.h1}>Register</h1>
      <RegistrationInputs setUserInfo={setUserInfo} userInfo={userInfo} />
      <RegistrationButton onButtonSubmit={onButtonSubmit} userInfo={userInfo}/>
    </section>
  );
}

export default Registartion;