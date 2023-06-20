const Filter = ({ filterValue, filterChange }) => {
  return (
    <div>
      Find countries that include:
      <input value={filterValue} onChange={filterChange} />
    </div>
  );
};

export default Filter;
