import { Helmet, HelmetProvider } from "react-helmet-async";

function Search () {
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
      <p>Search through your past lessons on Notum</p>
    </HelmetProvider>
  );
}

export default Search;