import { useState } from "react";

const Display1 = (props) => {
  return (
    <div>
      {props.text} {props.good}
    </div>
  );
};
const Display2 = (props) => {
  return (
    <div>
      {props.text} {props.neutral}
    </div>
  );
};
const Display3 = (props) => {
  return (
    <div>
      {props.text} {props.bad}
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      {props.text} {props.total}
    </div>
  );
};

const Average = (props) => {
  const average = props.total === 0 ? 0 : props.average;
  return (
    <div>
      {props.text} {average}
    </div>
  );
};

const Positive = (props) => {
  const total = props.total === 0 ? 0 : props.positive;
  return (
    <div>
      {props.text} {total}
    </div>
  );
};

const Label = (props) => {
  return <h1>{props.text}</h1>;
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <Label text={"Give Feedback"} />
      <Button handleClick={() => setGood(good + 1)} text={"good"} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Button handleClick={() => setBad(bad + 1)} text={"bad"} />

      <Label text={"Statistics"} />
      <Display1 good={good} text={"good"} />
      <Display2 neutral={neutral} text={"neutral"} />
      <Display3 bad={bad} text={"bad"} />
      <Total total={good + neutral + bad} text={"total"} />
      <Average
        total={good + neutral + bad}
        average={(good - bad) / (good + neutral + bad)}
        text={"average"}
      />
      <Positive
        total={good + neutral + bad}
        positive={good / (good + neutral + bad)}
        text={"positive"}
      />
    </>
  );
};

export default App;
