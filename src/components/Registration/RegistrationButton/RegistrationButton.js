import styles from "./RegistrationButton.module.css"

const RegistrationButton = (props) => {
  const { fullName, email, password } = props;

  const onEmailCheck = () => email.includes("@");
  const onFullNameCheck = () => {
    const regex = /^[a-zA-Z\s]{1,120}$/;
    return regex.test(fullName);
  };
  const onPasswordCheck = () => password.length >= 8;

  const printValues = () => {
    console.log(fullName, email, password);
  };

  const onButtonSubmit = () => {
    if (!fullName || !email || !password) {
      alert("You should complete all fields");
      printValues();
    } else if (!onFullNameCheck()) {
      alert("FullName format is not correct");
      printValues();
    } else if (!onEmailCheck()) {
      alert("email format is not correct");
      printValues();
    } else if (!onPasswordCheck()) {
      alert("password is too short");
      printValues();
    } else {
      alert("Success");
      printValues();
    }
  };

  return (
    <button
      type="button"
      onClick={onButtonSubmit}
      className={styles.buttonSignUp}
    >
      Sign Up
    </button>
  );
}

export default RegistrationButton;