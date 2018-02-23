import React from 'react';
import './Count.css';

const Count = ({
  count,
  isTimerFinished,
  onClickPause,
  onClickReset,
  onClickStart,
  title,
  target,
}) => (
  <div className="Count">
    <h1>{title}</h1>
    <div>Target Count: {target}</div>
    <div>Current Count: {count}</div>
    {isTimerFinished ? (
      <button className="reset" onClick={onClickReset}>Reset</button>
    ) : (
      <div>
        <button className="start" onClick={onClickStart}>Start</button>
        <button className="pause" onClick={onClickPause}>Pause</button>
      </div>
    )}
  </div>
);

export default Count;
