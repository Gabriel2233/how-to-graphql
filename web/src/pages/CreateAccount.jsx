import {
  FormContainer,
  InputElement,
  SubmitButton,
  Home,
} from "../styles/AuthPageStyles";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { Layout } from "../components/Layout";
import { AUTH_TOKEN } from "../constants";
import { useMutation } from "@apollo/client";
import { SIGNUP_MUTATION } from "../graphql/mutations";
import { saveToken } from "../utils/token-utils";

const CreateAccount = () => {
  const history = useHistory();

  const { errors, register, handleSubmit } = useForm();

  const [createNewUser, { data }] = useMutation(SIGNUP_MUTATION);


  const createAccount = async (data) => {
    try {
      const response = await createNewUser({
        variables: {
          email: data.email,
          name: data.name,
          password: data.password,
        },
      });

      const newUserObject = await response.data;

      saveToken(newUserObject.signup.token);

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
      <FormContainer onSubmit={handleSubmit(createAccount)}>
        <h2>Create an account</h2>

        <InputElement placeholder="Your Email" ref={register} name="email" />
        <InputElement placeholder="Your name" ref={register} name="name" />
        <InputElement
          placeholder="Your password"
          ref={register}
          name="password"
        />
        <SubmitButton type="submit">Create Account</SubmitButton>

        <Link to="/login">
          <h3>Login</h3>
        </Link>
      </FormContainer>
    </Layout>
  );
};

export default CreateAccount;
