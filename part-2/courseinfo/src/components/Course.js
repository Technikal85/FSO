const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Total = ({ sum }) => <p>Number of exercises {sum}</p>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
};

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

export default Course;
