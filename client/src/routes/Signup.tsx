import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

import { SignUpStyles, CarouselStyles, FormStyle, InputFormStyles, AuthNavigationStyles } from "../styles/AuthFormStyles";

const signUpValidation = z
  .object({
    userName: z.string().trim().min(3, "Username is required.").max(30, "Your username is too long."),
    email: z.string().trim().email("Must be an email.").min(5, "Email is required").max(50, "Your Email is too long."),
    password: z.string().trim().min(6, "Password is required.").max(50, "Your password is too long."),
    confirmPassword: z.string().trim().min(6, "Confirm Password is required.").max(50, "Your confirm password is too long.")
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ["confirmPassword"],
  });

type SignUpFieldsType = z.infer<typeof signUpValidation>;

function SignUp() {

  const {
    register,
    handleSubmit,
    reset,
    setError,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    resolver: zodResolver(signUpValidation),
  });

  const onSubmit = (values: SignUpFieldsType) => {
    // TODO: API call to sign up an account
    reset();
  }

  const inputs = [
    {
      id: "sign-up-name",
      label: "User Name",
      registerKey: "userName" as const,
      errorCondition: errors.userName,
      inputType: "text"
    },
    {
      id: "sign-up-email",
      label: "Email Address",
      registerKey: "email" as const,
      errorCondition: errors.email,
      inputType: "text"
    },
    {
      id: "sign-up-password",
      label: "Password",
      registerKey: "password" as const,
      errorCondition: errors.password,
      inputType: "password"
    },
    {
      id: "sign-up-confirm-password",
      label: "Confirm Password",
      registerKey: "confirmPassword" as const,
      errorCondition: errors.confirmPassword,
      inputType: "password"
    },
  ];

  return (
    <SignUpStyles>
      <CarouselStyles>Carousel View</CarouselStyles>
      <FormStyle>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputs.map(({ id, label, registerKey, errorCondition, inputType }) => {
            return (
              <InputFormStyles key={id}>
                <label htmlFor={id}>{label}</label>
                <input id={id} type={inputType} {...register(registerKey)} className={errorCondition && 'invalid'}></input>
                {errorCondition && <small className="error-message">{errorCondition.message}</small>}
              </InputFormStyles>
            )
          })}
          <button type="submit">Get My Notum</button>
        </form>
        <AuthNavigationStyles>
          <p>Already have an account? <Link to="/login">Login Here</Link></p>
        </AuthNavigationStyles>
      </FormStyle>
    </SignUpStyles>
  );
}

export default SignUp