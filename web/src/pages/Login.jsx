import { Layout } from "../components/Layout";

import {
  FormContainer,
  InputElement,
  SubmitButton,
  Home,
} from "../styles/AuthPageStyles";
import { LOGIN_MUTATION } from "../graphql/mutations";
import { useMutation } from "@apollo/client";

import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { AUTH_TOKEN } from "../constants";
import { saveToken } from "../utils/token-utils";

const Login = () => {
  const history = useHistory();

  const { register, errors, handleSubmit } = useForm();

  const [logUserIn, { data }] = useMutation(LOGIN_MUTATION);

  const login = async (data) => {
    try {
      const response = await logUserIn({
        variables: { email: data.email, password: data.password },
      });

      const loginObject = await response.data;

      saveToken(loginObject.login.token);

      history.push("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Layout>
      <Home>
        <Link to="/">
          <h2>home</h2>
        </Link>
      </Home>
      <FormContainer onSubmit={handleSubmit(login)}>
        <h2>Login</h2>

        <InputElement placeholder="Your Email" ref={register} name="email" />
        <InputElement
          placeholder="Your password"
          ref={register}
          name="password"
        />
        <SubmitButton type="submit">Login</SubmitButton>

        <Link to="/create-account">
          <h3>Create an account</h3>
        </Link>
      </FormContainer>
    </Layout>
  );
};

export default Login;
