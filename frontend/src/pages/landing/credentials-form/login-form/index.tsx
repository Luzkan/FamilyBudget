import CredentialsForm from "common/credential-form"
import React from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { creatorsAuth } from "store/auth/creators"
import { LoginCredentials } from "types/user"

import FormSwitchLogin from "./components/FormSwitch"

interface Props {
  setLoginForm: (loginForm: boolean) => void
}

const LoginForm = ({ setLoginForm }: Props) => {
  const { register, handleSubmit } = useForm<LoginCredentials>()

  const dispatch = useDispatch()

  const onSubmit = (data: LoginCredentials) => {
    // Sending password in plaintext (even when SSL is used) is a questionable practice.
    // https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html
    dispatch(creatorsAuth.login(data))
  }

  return (
    <CredentialsForm
      handleInput={register}
      onSubmit={handleSubmit(onSubmit)}
      additionalFields={[
        <FormSwitchLogin
          key={"form-switch-login"}
          handleClick={() => setLoginForm(false)}
        />,
      ]}
      buttonText={"Login"}
    />
  )
}

export default LoginForm
