import React, { useState } from "react"
import styles from './Registration.module.css'
import RegistrationButton from "./RegistrationButton"
import RegistrationInputs from "./RegistrationInputs"

const Registartion = () => {
  const [fullName, setfullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <section className={styles.container}>
      <h1 className={styles.h1}>Register</h1>
      <RegistrationInputs
        setfullName={setfullName}
        setEmail={setEmail}
        setPassword={setPassword}
      />
      <RegistrationButton
        fullName={fullName}
        email={email}
        password={password}
      />
    </section>
  );
}

export default Registartion;