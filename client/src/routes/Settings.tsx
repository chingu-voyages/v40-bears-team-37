import HelmetWrapper from "components/Helmet";

function SettingsComponent() {
  return <p>Create your courses on Notum</p>
}
function Settings () {
  return (
    <HelmetWrapper title="Notum Settings">
      <SettingsComponent />
    </HelmetWrapper>
  );
}

export default Settings;