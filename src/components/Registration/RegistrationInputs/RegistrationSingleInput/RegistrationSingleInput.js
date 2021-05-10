import React from "react";

const RegistrationSingleInput = (props) => {
  const { funcToUse } = props;

  return (
    <div>
      <input type="text" onChange={funcToUse} />
    </div>
  );
};

export default RegistrationSingleInput;
