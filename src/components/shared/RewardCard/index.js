import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const RewardCard = ({ user, date, text, rewardedBy }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.profileIcon}>
          {user?.firstName?.substring(0, 1)?.toUpperCase()}
          {user?.lastName?.substring(0, 1)?.toUpperCase()}
        </div>
        <div>
          <h3>
            {user?.firstName} {user?.lastName}{' '}
            {rewardedBy && `rewarded by ${rewardedBy.name}`}
          </h3>
          <p>{date}</p>
        </div>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

RewardCard.propTypes = {
  user: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rewardedBy: PropTypes.bool,
};

RewardCard.defaultProps = {
  rewardedBy: false,
};

export default RewardCard;
