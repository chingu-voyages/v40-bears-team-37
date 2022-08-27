// TODO: this is a temporary login form, just to check if login is working
// need to add styles, and proper validations

import { useForm } from "react-hook-form";
import { useAuth } from "context/AuthContext";
import { Link } from "react-router-dom";

type FormValues = {
  email: string;
  password: string;
};

function Login() {
  const auth = useAuth();
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => auth.login(data));

  return (
    <>
      <p>Login to your Notum Account!</p>
      <form onSubmit={onSubmit}>
        <input {...register("email")} /> <br />
        <input {...register("password")} /> <br />
        <button type="submit">Login</button>
      </form>
      <p>
        No account? <Link to="/signup">Signup Here</Link>
      </p>
    </>
  );
}

export default Login;
