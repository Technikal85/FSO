const App = () => {
  const course = "Half Stack application development";
  const parts = [
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
  ];

  return (
    <>
      <Header course={course} />
      <Content Part1 Part2 Part3 parts={parts} />
      <Total parts={parts} />
    </>
  );
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = (props) => {
  const parts = [
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
  ];
  return (
    <>
      <Part1 parts={parts} />
      <Part2 parts={parts} />
      <Part3 parts={parts} />
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
