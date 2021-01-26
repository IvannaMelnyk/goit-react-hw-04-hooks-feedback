import { Component } from 'react';

import Section from './Section';
import Statistics from './Statistics';
import FeedbackOption from './Feedback';
import { FEEDBACK_OPTIONS } from '../data/constants';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositivePerc = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    // return Math.round(good / total) * 100 || 0;
    return total ? Math.round((good / total) * 100) : 0;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePerc = this.countPositivePerc();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOption
            options={FEEDBACK_OPTIONS}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePerc={positivePerc}
          />
        </Section>
      </div>
    );
  }
}
export default App;
