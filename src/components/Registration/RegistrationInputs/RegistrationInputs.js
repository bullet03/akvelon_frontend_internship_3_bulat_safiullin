import React from "react";
import FormInput from "./FormInput"

const RegistrationInputs = ({ setUserInfo, userInfo }) => {
  const onChangeName = (e) => {
    setUserInfo({...userInfo, fullName: e.target.value});
  };
  const onEmailChange = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value });
  };
  const onPasswordChange = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
  };

  return (
    <>
      <FormInput
        text="FullName"
        label="FullName"
        value={userInfo.FullName}
        type="text"
        onChange={onChangeName}
      />
      <FormInput
        text="Email"
        label="email"
        value={userInfo.email}
        type="email"
        onChange={onEmailChange}
      />
      <FormInput
        text="Password"
        label="FullName"
        value={userInfo.password}
        type="password"
        onChange={onPasswordChange}
      />
    </>
  );
};

export default RegistrationInputs;
