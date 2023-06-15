import { useState, useEffect } from "react";
import entryService from "./services/entries";

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

const People = ({ persons, filter, handleRemove }) => {
  const peopleToShow = filter
    ? persons.filter((person) => person.name.toLowerCase().includes(filter))
    : persons;
  return (
    <ul>
      {peopleToShow.map((person) => {
        return (
          <li key={person.name}>
            {person.name + person.number}
            <button onClick={() => handleRemove(person.name, person.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    entryService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value.toLowerCase());
  };

  const handleRemove = (name, id) => {
    window.confirm(`delete ${name}?`);
    entryService.remove(id).then(() => {
      setPersons(persons.filter((person) => person.id !== id));
    });
  };

  const addName = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, number: newNumber };

    const person = persons.find((person) => person.name === newPerson.name);

    if (person) {
      if (person.number !== newPerson.number) {
        if (
          window.confirm(
            `${newPerson.name} is already in the phonebook, replace the old number with a new one?`
          )
        ) {
          entryService.update(person.id, newPerson).then((response) => {
            setPersons(
              persons.map((p) => (p.id !== person.id ? p : response.data))
            );
            setNewName("");
            setNewNumber("");
          });
        }
      } else {
        alert(`${newPerson.name} is already in the phonebook`);
      }
    } else {
      entryService.create(newPerson).then((response) => {
        setPersons(persons.concat(response.data));
        setNewName("");
        setNewNumber("");
      });
    }
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
      <People persons={persons} filter={filter} handleRemove={handleRemove} />
    </div>
  );
};

export default App;
