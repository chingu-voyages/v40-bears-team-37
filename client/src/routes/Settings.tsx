import HelmetWrapper from "components/Helmet/HelmetWrapper";
import RenderComponentWithSideBar from "components/WithSideBar/WithSideBar";

function SettingsComponent() {
  return <p>Create your courses on Notum</p>
}
function Settings () {
  return (
    <HelmetWrapper>
      <RenderComponentWithSideBar Component={<SettingsComponent />} />
    </HelmetWrapper>
  );
}

export default Settings;