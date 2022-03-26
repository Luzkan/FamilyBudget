import ModalFormInputGroup from "common/modal-form/components/InputGroup"
import React from "react"
import { Button, Form } from "react-bootstrap"
import { Lock, Mailbox } from "react-bootstrap-icons"
import { UseFormRegister } from "react-hook-form"
import { RootStateOrAny, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { CredentialsData } from "types/user"

interface Props {
  handleInput: UseFormRegister<any>; // eslint-disable-line
  onSubmit: () => void
  additionalFields: JSX.Element[] | null
  buttonText: string
}

const CredentialsForm = ({
  handleInput,
  onSubmit,
  additionalFields,
  buttonText,
}: Props) => {
  const credentialsData: CredentialsData = useSelector(
    (store: RootStateOrAny) => store.credentials
  )

  if (credentialsData.token) return <Navigate replace to="/budgets" />

  const IconEmail = (): JSX.Element => <Mailbox />
  const IconPassword = (): JSX.Element => <Lock />

  return (
    <Form className="form landing-page-login" onSubmit={onSubmit}>
      <ModalFormInputGroup
        handleInput={handleInput}
        icon={IconEmail}
        formControlProps={{
          placeholder: "Email",
          type: "email",
          id: "email",
          name: "email",
        }}
      />
      <ModalFormInputGroup
        handleInput={handleInput}
        icon={IconPassword}
        formControlProps={{
          placeholder: "Password",
          type: "password",
          id: "password",
          name: "password",
        }}
      />
      {additionalFields &&
        additionalFields.map((field, index) => <div key={index}>{field}</div>)}
      <Button className="btn-round" color="primary" size="lg" type="submit">
        {buttonText}
      </Button>
    </Form>
  )
}

export default CredentialsForm
