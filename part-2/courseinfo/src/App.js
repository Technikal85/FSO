const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Total = ({ sum }) => <p>Number of exercises {sum}</p>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    <Part part={parts[0]} />
    <Part part={parts[1]} />
    <Part part={parts[2]} />
    <Part part={parts[3]} />
  </>
);

const Course = ({ name, parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <>
      <Header name={name} />
      <Content parts={parts} />
      <Total sum={totalExercises} />
    </>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  const { name, parts } = course;

  return <Course name={name} parts={parts} />;
};

export default App;
