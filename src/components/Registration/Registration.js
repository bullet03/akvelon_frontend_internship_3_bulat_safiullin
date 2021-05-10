import React, { useState } from "react"
import styles from './Registration.module.css'
import RegistrationButton from "./RegistrationButton"
import RegistrationInputs from "./RegistrationInputs"
import ModuleWindow from "./ModuleWindow"

const Registartion = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState('')
  const onClose = () => {
    setIsOpen(!isOpen)
  }

  const onEmailCheck = () => userInfo.email.includes("@");
  const onFullNameCheck = () => {
    const regex = /^[a-zA-Z\s]{1,120}$/;
    return regex.test(userInfo.fullName);
  };
  const onPasswordCheck = () => userInfo.password.length >= 8;

  const printValues = (fullName, email, password) => {
    console.log(`fullName: ${fullName}, email: ${email}, password: ${password}`);
  };

  const onButtonSubmit = (userInfo) => {
    const { fullName, email, password } = userInfo;
    if (!fullName || !email || !password) {
      setIsOpen(!isOpen);
      setText("You should complete all fields");
    } else if (!onFullNameCheck()) {
      setIsOpen(!isOpen);
      setText("FullName format is not correct");
    } else if (!onEmailCheck()) {
      setIsOpen(!isOpen);
      setText("email format is not correct");
    } else if (!onPasswordCheck()) {
      setIsOpen(!isOpen);
      setText("password is too short");
    } else {
      setIsOpen(!isOpen);
      setText("Success");
    }
    printValues(fullName, email, password);
  };

  return (
    <section className={styles.container}>
      <ModuleWindow text={text} isOpen={isOpen} onClose={onClose} />
      <h1 className={styles.h1}>Register</h1>
      <RegistrationInputs setUserInfo={setUserInfo} userInfo={userInfo} />
      <RegistrationButton onButtonSubmit={onButtonSubmit} userInfo={userInfo} />
    </section>
  );
}

export default Registartion;