import './SearchResults.css';
const SearchResults = ({ data }) => {
  if (!data || !data.length) return null;

  const resultList = data.map((item) => {
    return (
      <li key={data.id}>
        <span>{item.name}</span>
      </li>
    );
  });

  return (
    <div className="search-results">
      <ul>{resultList}</ul>
    </div>
  );
};

export default SearchResults;
