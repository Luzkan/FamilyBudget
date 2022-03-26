import React from "react"
import { Button } from "react-bootstrap"

import ModalFormButton from "./components/Button"
import ModalFormModal from "./components/Modal"

interface ButtonProps {
  text: string
}

interface ModalProps {
  headerTitle: string
  bodyContent: JSX.Element
  footer: JSX.Element[]
  onSubmit: () => void
}

interface Props {
  button: ButtonProps
  modal: ModalProps
}

const ModalForm = ({ button, modal }: Props) => {
  const [modalShow, setModalShow] = React.useState(false)
  const onHide = () => setModalShow(false)

  return (
    <>
      <ModalFormButton
        showModal={() => setModalShow(true)}
        buttonText={button.text}
      />
      <ModalFormModal
        functionalHandlers={{
          show: modalShow,
          onHide: () => setModalShow(false),
          onSubmit: modal.onSubmit,
        }}
        content={{
          headerTitle: modal.headerTitle,
          bodyContent: modal.bodyContent,
          bodyFooter: [
            ...modal.footer,
            <Button key={"close-button"} onClick={onHide}>
              Close
            </Button>,
          ],
        }}
      />
    </>
  )
}

export default ModalForm
