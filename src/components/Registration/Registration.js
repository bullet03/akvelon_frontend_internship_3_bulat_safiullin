import { useState } from "react"
import styles from './Registration.module.css'

const Registartion = () => {
  const [fullName, setfullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const printValues = () => {
    console.log(fullName, email, password);
  }

  const onChangeName = (e) => {
    setfullName(e.target.value);
  }
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const onPasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const onEmailCheck = () => email.includes('@')
  const onFullNameCheck = () => {
    const regex = /^[a-zA-Z\s]{1,120}$/
    return regex.test(fullName);
  }
  const onPasswordCheck = () => password.length >= 8


  const onButtonSubmit = () => {
    if (!fullName || !email || !password) {
      alert("You should complete all fields")
    } else if (!onFullNameCheck()) {
      alert("FullName format is not correct");
    } else if (!onEmailCheck()) {
      alert("email format is not correct");
    } else if (!onPasswordCheck()) {
      alert("password is too short");
    } else {
      alert("Success");
      printValues();
    }
  }
  return (
    <section className={styles.container}>
      <h1 className={styles.h1}>Register</h1>
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
      <div>
        <button
          type="button"
          onClick={onButtonSubmit}
          className={styles.buttonSignUp}
        >
          Sign Up
        </button>
      </div>
    </section>
  );
}

export default Registartion;