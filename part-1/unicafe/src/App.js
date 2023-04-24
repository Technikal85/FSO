import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const Label = ({ text }) => <h1>{text}</h1>;

const Good = ({ text, good }) => (
  <div>
    {text} {good}
  </div>
);
const Neutral = ({ text, neutral }) => (
  <div>
    {text} {neutral}
  </div>
);
const Bad = ({ text, bad }) => (
  <div>
    {text} {bad}
  </div>
);

const Total = ({ total, text }) => (
  <div>
    {text} {total}
  </div>
);

const Average = ({ total, average, text }) => {
  const zero = total === 0 ? 0 : average;
  return (
    <div>
      {text} {zero}
    </div>
  );
};

const Positive = ({ total, positive, text }) => {
  const zero = total === 0 ? 0 : positive;
  return (
    <div>
      {text} {zero}
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

const History = ({ total, good, neutral, bad }) => {
  return total === 0 ? (
    <h2>No feedback given.</h2>
  ) : (
    <Statistics good={good} neutral={neutral} bad={bad} />
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
      <History
        total={good + neutral + bad}
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </>
  );
};

export default App;
