const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name:'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name:'Using props to pass data',
    exercises2: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises3: 14
  }

  return (
    <>
      <Header course={course} />
      <Content
        Part1
        part1={part1.name}
        exercises1={part1.exercises1}
        Part2
        part2={part2.name}
        exercises2={part2.exercises2}
        Part3
        part3={part3.name}
        exercises3={part3.exercises3}
      />
      <Total
        exercises1={part1.exercises1}
        exercises2={part2.exercises2}
        exercises3={part3.exercises3}
      />
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
  const part1 = {
    name:'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name:'Using props to pass data',
    exercises2: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises3: 14
  }
  return (
    <>
      <Part1 part1={part1.name} exercises1={part1.exercises} />
      <Part2 part2={part2.name} exercises2={part2.exercises2} />
      <Part3 part3={part3.name} exercises3={part3.exercises3} />
    </>
  );
};

const Part1 = (props) => {
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
    </div>
  );
};

const Part2 = (props) => {
  return (
    <div>
      <p>
        {props.part2} {props.exercises2}
      </p>
    </div>
  );
};

const Part3 = (props) => {
  return (
    <div>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.exercises1} + {props.exercises2} +{" "}
        {props.exercises3}
      </p>
    </div>
  );
};

export default App;
