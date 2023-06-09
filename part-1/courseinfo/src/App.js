const course = {
  name: "Half Stack application development",
  parts: [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ],
};
const App = () => {
  return (
    <>
      <Header />
      <Content />
      <Total parts={course.parts} />
    </>
  );
};

const Header = (props) => (
  <div>
    <h1>{props.name}</h1>
  </div>
);

const Content = () => {
  return (
    <>
      <Part1 parts={course.parts} />
      <Part2 parts={course.parts} />
      <Part3 parts={course.parts} />
    </>
  );
};

const Part1 = (props) => {
  return (
    <div>
      <p>
        {props.parts[0].name} {props.parts[0].exercises}
      </p>
    </div>
  );
};

const Part2 = (props) => {
  return (
    <div>
      <p>
        {props.parts[1].name} {props.parts[1].exercises}
      </p>
    </div>
  );
};

const Part3 = (props) => {
  return (
    <div>
      <p>
        {props.parts[2].name} {props.parts[2].exercises}
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {props.parts[0].exercises +
          props.parts[1].exercises +
          props.parts[2].exercises}
      </p>
    </div>
  );
};

export default App;
