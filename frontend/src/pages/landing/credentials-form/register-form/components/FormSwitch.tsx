import React from "react"

interface Props {
  handleClick: () => void
}

const FormSwitchRegister = ({ handleClick }: Props) => {
  const spanForSwitch = (
    <span onClick={handleClick} className="text-clickable">
      here
    </span>
  )

  return (
    <p className="text-hint switch-form">
      Already registered? Click {spanForSwitch} to login.
    </p>
  )
}

export default FormSwitchRegister
