import React from "react";
import styles from "./RegistrationInputs.module.css";
import RegistrationSingleInput from "./RegistrationSingleInput";

const RegistrationInputs = (props) => {
  const { setfullName, setEmail, setPassword } = props;

  const onChangeName = (e) => {
    setfullName(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className={styles.fieldContainer}>
        <span>Full Name:</span>
        <RegistrationSingleInput funcToUse={onChangeName} />
      </div>
      <div className={styles.fieldContainer}>
        <span>E-mail:</span>
        <RegistrationSingleInput funcToUse={onEmailChange} />
      </div>
      <div className={styles.fieldContainer}>
        <span>Password:</span>
        <RegistrationSingleInput funcToUse={onPasswordChange} />
      </div>
    </>
  );
};

export default RegistrationInputs;
