import { useState } from "react";

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      Names that start with:
      <input value={filter} onChange={handleFilterChange} />
    </div>
  );
};

const Form = ({
  addName,
  newName,
  newNumber,
  handleNameChange,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

const People = ({ persons, filter }) => {
  const peopleToShow = filter
    ? persons.filter((person) => person.name.toLowerCase().includes(filter))
    : persons;
  return (
    <ul>
      {peopleToShow.map((person) => {
        return <li key={person.name}>{person.name + person.number}</li>;
      })}
    </ul>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value.toLowerCase());
  };

  const addName = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, number: newNumber };
    persons.forEach((person) => {
      if (person.name === newPerson.name) {
        return alert(`${newPerson.name} is already in the phonebook`);
      } else {
        setPersons(persons.concat(newPerson));
      }
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>Add new</h2>
      <Form
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <People persons={persons} filter={filter} />
    </div>
  );
};

export default App;
