import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNoteChange = (event) => {
    setNewName(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();
    const newPerson = { name: newName };
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
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => {
          return <li key={person.name}>{person.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;