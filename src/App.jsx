import React from 'react';
import Countdown from './Countdown';
import Countup from './Countup';
import './App.css';

// const addOne = x => x + 1;
// const addTwo = x => x + 2;

const createAddY = y => x => x + y;

const addOne = createAddY(1);
const addTwo = createAddY(2);

const Header = ({ toggleExcited, message1, excited }) => <h1 onClick={toggleExcited}>{message1}{excited && '!'}</h1>;

const Paragraph = ({ toggleExcited, message2, excited }) => <p onClick={toggleExcited}>{message2}{excited && '!'}</p>;

const withProps = props => Component => {
  return class WithMessage extends React.Component {
    render() {
      return <Component {...props} {...this.props} />;
    }
  }
}

const withExcitedToggle = Component => {
  return class WithMessage extends React.Component {
    state = { excited: true }

    toggleExcited = () => this.setState({ excited: !this.state.excited })

    render() {
      return <Component {...this.props} excited={this.state.excited} toggleExcited={this.toggleExcited}/>;
    }
  }
}

const compose = (...fns) => Component => fns.reduceRight((CurrentComponent, fn) => fn(CurrentComponent), Component)

const enhance1 = compose(
  withExcitedToggle,
  withProps({ message1: 'hello headerxx' }),
);

const enhance2 = compose(
  withExcitedToggle,
  withProps({ message2: 'hello paragraph' }),
);

const EnhancedHeader = enhance1(Header)
const EnhancedParagraph = enhance2(Paragraph)

const App = () => (
  <div className="App">
    <EnhancedHeader />
    <EnhancedParagraph />
  </div>
);

export default App;
