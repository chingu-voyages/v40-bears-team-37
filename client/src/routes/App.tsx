import CalendarView from "components/CalendarView";
import HelmetWrapper from "components/Helmet";
import RenderComponentWithSideBar from "components/WithSideBar";

function App() {
  return (
    <HelmetWrapper>
      <RenderComponentWithSideBar Component={<CalendarView />} />
    </HelmetWrapper>
  );
}

export default App;
