import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuth } from "context/AuthContext";
import { Link } from "react-router-dom";
import { AuthNavigationStyles, CarouselStyles, FormStyle, InputFormStyles, InvalidMessageStyles, SignUpStyles } from "styles/AuthFormStyles";

import { loginServer as loginService } from "services/auth";
import { LoginResponseType } from "types/auth";

const loginValidation = z
  .object({
    email: z
      .string()
      .trim()
      .email("This is not a valid email address.")
      .max(50, "Your email address is too long."),
    password: z
      .string({ required_error: "Must provide password" })
      .trim()
      .min(6, "Password should be longer than 10 characters")
      .max(50, "Your password is too long."),
    loginError: z.void(),
  });

type loginFieldsType = z.infer<typeof loginValidation>;

function Login() {
  const auth = useAuth();

  const { register, handleSubmit, setError, formState: { errors, isSubmitSuccessful } } = useForm<z.output<typeof loginValidation>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginValidation),
  });

  const onSubmit = async (values: loginFieldsType) => {
    const data = (await loginService({
      password: values.password,
      email: values.email,
    })) as LoginResponseType;
    if (!data.success) {
      setError("loginError", { message: data.message });
    } else {
      auth.setUser(data.data!!);
    }
  };

  const inputs = [
    {
      id: "login-email",
      label: "Email Address",
      registerKey: "email" as const,
      errorCondition: errors.email,
      inputType: "text",
    },
    {
      id: "login-password",
      label: "Password",
      registerKey: "password" as const,
      errorCondition: errors.password,
      inputType: "password",
    },
  ];

  return (
    <SignUpStyles>
      <CarouselStyles>Carousel View</CarouselStyles>
      <FormStyle>
        <h1>Login to your Notum account!</h1>
        {!isSubmitSuccessful
          && (
            <form onSubmit={handleSubmit(onSubmit)}>
              { inputs.map(({id, label, registerKey, errorCondition, inputType}) => {
                return (
                  <InputFormStyles key={id}>
                    <label htmlFor={id}>{label}</label>
                    <input
                      id={id}
                      type={inputType}
                      {...register(registerKey)}
                      className={errorCondition && "invalid"}
                    ></input>
                    {errorCondition && (
                      <small className="error-message">
                        {errorCondition.message}
                      </small>
                    )}
                  </InputFormStyles>
                );
              }) }
              {errors.loginError && <InvalidMessageStyles>{errors.loginError.message}</InvalidMessageStyles>}
              <button type="submit">Login</button>
            </form>
          )}
        <AuthNavigationStyles>
          <p>
            No account? <Link to="/signup">Signup Here</Link>
          </p>
        </AuthNavigationStyles>
      </FormStyle>
    </SignUpStyles>
  );
}

export default Login;
