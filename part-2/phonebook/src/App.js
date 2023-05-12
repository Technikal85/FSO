import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleNoteChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value.toLowerCase());
  };

  const addNote = (event) => {
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

  const peopleToShow = filter
    ? persons.filter((person) => person.name.toLowerCase().includes(filter))
    : persons;

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        Names that start with:{" "}
        <input value={filter} onChange={handleFilterChange} />
      </div>
      <h2>Add new</h2>
      <form onSubmit={addNote}>
        <div>
          name: <input value={newName} onChange={handleNoteChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {peopleToShow.map((person) => {
          return <li key={person.name}>{person.name + person.number}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
