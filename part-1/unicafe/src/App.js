import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);
const Label = (props) => <h1>{props.text}</h1>;

const Good = (props) => (
  <div>
    {props.text} {props.good}
  </div>
);
const Neutral = (props) => (
  <div>
    {props.text} {props.neutral}
  </div>
);
const Bad = (props) => (
  <div>
    {props.text} {props.bad}
  </div>
);

const Total = (props) => (
  <div>
    {props.text} {props.total}
  </div>
);

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

const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
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
      <Good good={good} text={"good"} />
      <Neutral neutral={neutral} text={"neutral"} />
      <Bad bad={bad} text={"bad"} />
      <Label text={"Statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
