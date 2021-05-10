import styles from "./RegistrationInputs.module.css";

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
        <div>
          <span>Full Name:</span>
        </div>
        <div>
          <input type="text" onChange={onChangeName} />
        </div>
      </div>
      <div className={styles.fieldContainer}>
        <div>
          <span>E-mail:</span>
        </div>
        <div>
          <input type="text" onChange={onEmailChange} />
        </div>
      </div>
      <div className={styles.fieldContainer}>
        <div>
          <span>Password:</span>
        </div>
        <div>
          <input type="text" onChange={onPasswordChange} />
        </div>
      </div>
    </>
  );
}

export default RegistrationInputs;