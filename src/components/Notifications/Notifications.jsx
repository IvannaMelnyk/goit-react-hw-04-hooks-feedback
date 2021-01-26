import PropTypes from 'prop-types';
import s from './Notifications.module.css';
const Notifications = ({ message }) => <p className={s.message}>{message}</p>;

Notifications.propTypes = { message: PropTypes.string.isRequired };

export default Notifications;
