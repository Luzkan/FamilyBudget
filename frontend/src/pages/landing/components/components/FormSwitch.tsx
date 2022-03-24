import React from "react";

interface Props {
  handleClick: any;
  isLoginForm: boolean;
}

const FormSwitch = ({ handleClick, isLoginForm }: Props) => {
  // This is formatted so ugly, that I just extracted it out to component to not see this

  const textForLoginForm = (
    <p className="text-hint switch-form">
      New? Click{" "}
      <span onClick={handleClick} className="text-clickable">
        here
      </span>{" "}
      to register instead.
    </p>
  );

  const textForRegisterForm = (
    <p className="text-hint switch-form">
      Already registered? Click{" "}
      <span onClick={handleClick} className="text-clickable">
        here
      </span>{" "}
      to login.
    </p>
  );

  return isLoginForm ? textForLoginForm : textForRegisterForm;
};

export default FormSwitch;
