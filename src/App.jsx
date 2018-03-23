import React from 'react';
import Countdown from './Countdown';
import Countup from './Countup';
import './App.css';

const addOne = x => x + 1;
const addTwo = x => x + 2;

const createAddY = y => x => x + y;
const addOne = createAddY(1);
const addTwo = createAddY(2);

const Header = ({ message }) => <h1>{message}</h1>;

const Paragraph = ({ message }) => <p>{message}</p>;

const withMessage = Component => {
  return class WithMessage extends React.Component {
    render() {
      return <Component message="hello world" />;
    }
  }
}

const App = () => (
  <div className="App">
    <Header message="hello world" />
    <Paragraph message="hello world" />
  </div>
);

export default App;
