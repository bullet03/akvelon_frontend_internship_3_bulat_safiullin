import React from "react";
import FormInput from "./FormInput"

const RegistrationInputs = ({ setUserInfo, userInfo }) => {
  const onChange = (fieldName, userInfo) => {
    return (e) => {
      setUserInfo({ ...userInfo, [fieldName]: e.target.value });
    }
  }

  return (
    <>
      <FormInput
        label="FullName"
        value={userInfo.FullName}
        text="FullName"
        type="text"
        onChange={onChange("fullName", userInfo)}
      />
      <FormInput
        label="email"
        value={userInfo.email}
        text="Email"
        type="email"
        onChange={onChange("email", userInfo)}
      />
      <FormInput
        label="FullName"
        value={userInfo.password}
        text="Password"
        type="password"
        onChange={onChange("password", userInfo)}
      />
    </>
  );
};

export default RegistrationInputs;
