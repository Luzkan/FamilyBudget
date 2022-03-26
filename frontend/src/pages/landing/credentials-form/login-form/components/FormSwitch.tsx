import React from "react"

interface Props {
  handleClick: () => void
}

const FormSwitchLogin = ({ handleClick }: Props) => {
  const spanForSwitch = (
    <span onClick={handleClick} className="text-clickable">
      here
    </span>
  )

  return (
    <p className="text-hint switch-form">
      New? Click {spanForSwitch} to register instead.
    </p>
  )
}

export default FormSwitchLogin
