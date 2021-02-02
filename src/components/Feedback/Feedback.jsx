import PropTypes from 'prop-types';
import s from './Feedback.module.css';

const FeedbackOption = ({ options, onLeaveFeedback }) => (
  <div className={s.options}>
    {options.map(option => (
      <button
        className={s.button}
        type="button"
        data-feedback={option}
        onClick={onLeaveFeedback}
        key={option}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOption.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOption;
