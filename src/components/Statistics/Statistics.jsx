import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import Notifications from '../Notifications';
const Statistics = ({ good, neutral, bad, total, positivePerc }) => {
  return (
    <>
      {total > 0 && (
        <ul className={s.list}>
          <li className={s.item}>Good:{good}</li>
          <li className={s.item}>Neutral:{neutral}</li>
          <li className={s.item}>Bad:{bad}</li>
          <li className={s.item}>Total:{total}</li>
          <li className={s.item}>Positive Percantage:{positivePerc}%</li>
        </ul>
      )}
      {total === 0 && <Notifications message="No Feedback given" />}
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePerc: PropTypes.number.isRequired,
};

export default Statistics;
