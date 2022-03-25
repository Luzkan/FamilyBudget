import React from "react";

interface Props {
  handleClick: () => void;
  isLoginForm: boolean;
}

const FormSwitch = ({ handleClick, isLoginForm }: Props) => {
  const spanForSwitch = (
    <span onClick={handleClick} className="text-clickable">
      here
    </span>
  );
  const textForLoginForm = (
    <p className="text-hint switch-form">
      New? Click {spanForSwitch} to register instead.
    </p>
  );
  const textForRegisterForm = (
    <p className="text-hint switch-form">
      Already registered? Click {spanForSwitch} to login.
    </p>
  );

  return isLoginForm ? textForLoginForm : textForRegisterForm;
};

export default FormSwitch;
