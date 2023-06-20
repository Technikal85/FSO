const CountriesToShow = ({ countries, filterValue }) => {
  const filterCountries = filterValue
    ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(filterValue.toLowerCase())
      )
    : countries;

  if (filterCountries.length > 10) {
    return <div>Too many matches, specify another filter.</div>;
  } else if (filterCountries.length === 1) {
    return (
      <ul>
        {filterCountries.map((country) => {
          return (
            <li key={country.name.common}>
              {country.name.common}
              {country.capital}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return (
      <ul>
        {filterCountries.map((country) => {
          return <li key={country.name.common}>{country.name.common}</li>;
        })}
      </ul>
    );
  }
};

export default CountriesToShow;
