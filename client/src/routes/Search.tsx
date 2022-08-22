import HelmetWrapper from "components/Helmet";

function SearchComponent() {
  return <p>Search through your past lessons on Notum</p>
}
function Search () {
  return (
    <HelmetWrapper title="Notum Search">
      <SearchComponent />
    </HelmetWrapper>
  );
}

export default Search;