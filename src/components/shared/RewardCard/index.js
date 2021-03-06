import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const RewardCard = ({ fromUser, toUser, date, price, text, isOppositeUserSender }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.profileIcon}>
          {fromUser?.firstName?.substring(0, 1)?.toUpperCase()}
          {fromUser?.lastName?.substring(0, 1)?.toUpperCase()}
        </div>
        <div>
          <h3>
            {isOppositeUserSender
              ? `${toUser?.firstName} ${toUser?.lastName}`
              : `${fromUser?.firstName} ${fromUser?.lastName}`}
          </h3>
          <h3>{price && `$${price}`}</h3>
          <p>{date}</p>
        </div>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

RewardCard.propTypes = {
  fromUser: PropTypes.object.isRequired,
  toUser: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  price: PropTypes.number,
  text: PropTypes.string.isRequired,
  isOppositeUserSender: PropTypes.bool,
};

RewardCard.defaultProps = {
  price: null,
  isOppositeUserSender: false,
};

export default RewardCard;
