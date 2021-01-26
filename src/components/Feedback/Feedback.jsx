import PropTypes from 'prop-types';
import s from './Feedback.module.css';

// const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
//   return (
//     <button
//       type="button"
//       // className={s.feedback__button}
//       key={feedback}
//       data-feedback={feedback}
//       onClick={onLeaveFeedback}
//     >
//       {feedback}
//     </button>
//   );
// };
// const FeedbackOption = ({ options, onLeaveFeedback }) => {
//   return options.map(options => (
//     <FeedbackButton feedback={options} onLeaveFeedback={onLeaveFeedback} />
//   ));
// };
// FeedbackOption.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string),
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
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

// import PropTypes from 'prop-types';
// import s from './Feedback.module.css';

// function FeedbackOption({ options, onLeaveFeedback, getNameOfItem }) {
//   const namesOfItems = Object.keys(options);

//   return (
//     <ul className={s.list}>
//       {namesOfItems.map(item => (
//         <li key={item}>
//           <button onClick={() => onLeaveFeedback(item)} className={s.button}>
//             {getNameOfItem(item)}{' '}
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// FeedbackOption.propTypes = {
//   options: PropTypes.objectOf(PropTypes.number).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
//   getNameOfItem: PropTypes.func.isRequired,
// };

// export default FeedbackOption;
