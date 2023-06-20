import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import countryService from "./services/countries";
import CountriesToShow from "./components/CountriesToShow";

const App = () => {
  const [filterValue, setFilterValue] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countryService.getAll().then((response) => setCountries(response.data));
  }, []);

  const filterChange = (event) => {
    setFilterValue(event.target.value.toLowerCase());
  };

  return (
    <div>
      <Filter filterValue={filterValue} filterChange={filterChange} />
      {filterValue && (
        <CountriesToShow countries={countries} filterValue={filterValue} />
      )}
    </div>
  );
};

export default App;
