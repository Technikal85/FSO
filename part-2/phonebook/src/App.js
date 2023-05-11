import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "123456789" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNoteChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
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

  return (
    <div>
      <h2>Phonebook</h2>
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
        {persons.map((person) => {
          return <li key={person.name}>{person.name + person.number}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
