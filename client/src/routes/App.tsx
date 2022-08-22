import { Helmet, HelmetProvider } from "react-helmet-async";
import CalendarView from "components/CalendarView";

function App() {
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
      <CalendarView />
    </HelmetProvider>
  );
}

export default App;
