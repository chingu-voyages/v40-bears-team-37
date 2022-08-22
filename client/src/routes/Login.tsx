import { Helmet, HelmetProvider } from "react-helmet-async";

function Login () {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Notum</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <p>Login to your Notum Account!</p>
    </HelmetProvider>
  );
}

export default Login;
