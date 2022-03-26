import AbsoluteBackground from "layout/absolute-background"
import React from "react"
import { Container } from "react-bootstrap"

import LoginForm from "./credentials-form/login-form"
import RegisterForm from "./credentials-form/register-form"

const PageLanding = () => {
  const [loginForm, setLoginForm] = React.useState(true)

  return (
    <>
      <AbsoluteBackground />
      <Container className="landing-page">
        <div className="content-center">
          <h1 className="title">Family Budget</h1>
          <h3 className="subtitle">Gather your spendings.</h3>
          {loginForm ? (
            <LoginForm setLoginForm={setLoginForm} />
          ) : (
            <RegisterForm setLoginForm={setLoginForm} />
          )}
        </div>
      </Container>
    </>
  )
}

export default PageLanding
