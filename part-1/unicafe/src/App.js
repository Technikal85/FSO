import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statisticline = ({ text, value }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            {text} {value}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <Statisticline text={"good"} value={good} />
      <Statisticline text={"neutral"} value={neutral} />
      <Statisticline text={"bad"} value={bad} />
      <Statisticline text={"total"} value={good + neutral + bad} />
      <Statisticline
        text={"average"}
        value={(good - bad) / (good + neutral + bad)}
      />
      <Statisticline text={"positive"} value={good / (good + neutral + bad)} />
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
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text={"good"} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Button handleClick={() => setBad(bad + 1)} text={"bad"} />
      <h1>Statistics</h1>
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
