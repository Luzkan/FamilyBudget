import { generate } from "password-hash";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { registration } from "../../../api/auth/register";
import Email from "./components/Email";
import FormSwitch from "./components/FormSwitch";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import Password from "./components/Password";
import { Navigate } from "react-router-dom";
import { CredentialsData, RegisterCredentials } from "../../../types/user";

interface Props {
  setLoginForm: (loginForm: boolean) => void;
}



const Register = ({ setLoginForm }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterCredentials>();

  const registerData: CredentialsData = useSelector((state: RootStateOrAny) => state.register);
  const dispatch = useDispatch();
  const onSubmit = (data: RegisterCredentials) => {
    if (data.password !== data.passwordConfirm) {
      alert("Passwords do not match.");
      return;
    }

    // In real case scenario, according to OWASP, I should use Argon2id or bcrypt
    // https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html

    const hashedPassword = generate(data.password, {
      algorithm: "SHA256",  // This algorithm is not secure, RSA/DES/AES, preferable
      saltLength: 8,
      iterations: 1
    });
    dispatch(registration.post({ ...data, password: hashedPassword }));
    console.log('[DEV] End of Register');
  };

  if (registerData.token) {
    return <Navigate replace to="/budgets" />;
  }

  return (
    <Form className="form landing-page-login" onSubmit={handleSubmit(onSubmit)}>
      <Email handleInput={register} name={"email"} />
      <Password handleInput={register} name={"password"} hint={"Password"} />
      <Password
        handleInput={register}
        name={"passwordConfirm"}
        hint={"Confirm Password"}
      />
      <FormSwitch handleClick={() => setLoginForm(true)} isLoginForm={false} />
      <Button className="btn-round" color="primary" size="lg" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Register;
