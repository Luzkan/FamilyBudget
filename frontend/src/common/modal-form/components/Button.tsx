import React from "react"
import { Button } from "react-bootstrap"

interface Props {
  showModal: () => void
  buttonText: string
}

const ModalFormButton = ({ showModal, buttonText }: Props) => {
  return <Button onClick={showModal}>{buttonText}</Button>
}

export default ModalFormButton
