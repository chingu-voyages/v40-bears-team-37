import HelmetWrapper from "components/Helmet";
import RenderComponentWithSideBar from "components/WithSideBar";

function SearchComponent() {
  return <p>Search through your past lessons on Notum</p>
}
function Search () {
  return (
    <HelmetWrapper title="Notum Search">
      <RenderComponentWithSideBar Component={<SearchComponent />} />
    </HelmetWrapper>
  );
}

export default Search;