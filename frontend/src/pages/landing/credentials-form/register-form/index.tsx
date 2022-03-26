import CredentialsForm from "common/credential-form"
import ModalFormInputGroup from "common/modal-form/components/InputGroup"
import { generate } from "password-hash"
import React from "react"
import { Lock } from "react-bootstrap-icons"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { creatorsAuth } from "store/auth/creators"
import { RegisterCredentials } from "types/user"

import FormSwitchRegister from "./components/FormSwitch"

interface Props {
  setLoginForm: (loginForm: boolean) => void
}

const RegisterForm = ({ setLoginForm }: Props) => {
  const { register, handleSubmit } = useForm<RegisterCredentials>()

  const dispatch = useDispatch()
  const onSubmit = (data: RegisterCredentials) => {
    if (data.password !== data.passwordConfirm) {
      alert("Passwords do not match.")
      return
    }

    // In real case scenario, according to OWASP, I should use Argon2id or bcrypt
    // https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html

    // This algorithm is not secure, RSA/DES/AES are preferable
    const hashedPassword = generate(data.password, {
      algorithm: "SHA256",
      saltLength: 8,
      iterations: 1,
    })
    dispatch(creatorsAuth.register({ ...data, password: hashedPassword }))
  }

  const IconPassword = (): JSX.Element => <Lock />

  return (
    <CredentialsForm
      handleInput={register}
      onSubmit={handleSubmit(onSubmit)}
      additionalFields={[
        <ModalFormInputGroup
          key={"confirm-password"}
          handleInput={register}
          icon={IconPassword}
          formControlProps={{
            placeholder: "Confirm Password",
            type: "password",
            id: "confirm-password",
            name: "passwordConfirm",
          }}
        />,
        <FormSwitchRegister
          key={"form-switch-register"}
          handleClick={() => setLoginForm(true)}
        />,
      ]}
      buttonText={"Register"}
    />
  )
}

export default RegisterForm
