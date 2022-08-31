import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import {
  SignUpStyles,
  CarouselStyles,
  FormStyle,
  InputFormStyles,
  AuthNavigationStyles,
} from "../styles/AuthFormStyles";
import { signup as signupService } from "services/auth";
import { SignupResponseType } from "types/auth";
import { useAuth } from "context/AuthContext";

const signUpValidation = z
  .object({
    username: z
      .string({ required_error: "Must provide username" })
      .trim()
      .min(3, "Username should be longer than 3 characters.")
      .max(30, "Your username is too long."),
    email: z.string().trim().email("Must provide email.").max(50, "Your Email is too long."),
    password: z
      .string({ required_error: "Must provide password" })
      .trim()
      .min(6, "Password should be longer than 10 characters")
      .max(50, "Your password is too long."),
    confirmPassword: z
      .string({ required_error: "Must provide confirm password" })
      .trim()
      .max(50, "Your confirm password is too long."),
    signupError: z.void(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ["confirmPassword"],
  });

type SignUpFieldsType = z.infer<typeof signUpValidation>;

function SignUp() {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitSuccessful },
  } = useForm<z.output<typeof signUpValidation>>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(signUpValidation),
  });

  const onSubmit = async (values: SignUpFieldsType) => {
    const data = (await signupService({
      name: values.username,
      password: values.password,
      email: values.email,
    })) as SignupResponseType;
    if (data.success === false) {
      setError("signupError", { message: data.message });
    } else {
      auth.setUser(data.data!!);
    }
  };

  const inputs = [
    {
      id: "sign-up-name",
      label: "Username",
      registerKey: "username" as const,
      errorCondition: errors.username,
      inputType: "text",
    },
    {
      id: "sign-up-email",
      label: "Email Address",
      registerKey: "email" as const,
      errorCondition: errors.email,
      inputType: "text",
    },
    {
      id: "sign-up-password",
      label: "Password",
      registerKey: "password" as const,
      errorCondition: errors.password,
      inputType: "password",
    },
    {
      id: "sign-up-confirm-password",
      label: "Confirm Password",
      registerKey: "confirmPassword" as const,
      errorCondition: errors.confirmPassword,
      inputType: "password",
    },
  ];

  return (
    <SignUpStyles>
      <CarouselStyles>Carousel View</CarouselStyles>
      <FormStyle>
        <h1>Sign Up</h1>
        {!isSubmitSuccessful ? (
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              {inputs.map(({ id, label, registerKey, errorCondition, inputType }) => {
                return (
                  <InputFormStyles key={id}>
                    <label htmlFor={id}>{label}</label>
                    <input
                      id={id}
                      type={inputType}
                      {...register(registerKey)}
                      className={errorCondition && "invalid"}
                    ></input>
                    {errorCondition && <small className="error-message">{errorCondition.message}</small>}
                  </InputFormStyles>
                );
              })}
              {errors.signupError && <p>{errors.signupError.message}</p>}
              <button type="submit">Get My Notum</button>
            </form>
            <AuthNavigationStyles>
              <p>
                Already have an account? <Link to="/login">Login Here</Link>
              </p>
            </AuthNavigationStyles>
          </>
        ) : (
          <>
            <p>Thank you for signing up</p>
            <AuthNavigationStyles>
              <p>
                <Link to="/">Go to calendar</Link>
              </p>
            </AuthNavigationStyles>
          </>
        )}
      </FormStyle>
    </SignUpStyles>
  );
}

export default SignUp;
