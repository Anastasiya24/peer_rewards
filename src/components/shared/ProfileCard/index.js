import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const ProfileCard = ({ firstName, lastName, myRewards }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.profileIcon}>
          {firstName?.substring(0, 1)?.toUpperCase()}
          {lastName?.substring(0, 1)?.toUpperCase()}
        </div>
        <p>
          {firstName} {lastName}
        </p>
      </div>
      {myRewards && (
        <div className={styles.myRewards}>
          <p>My Rewards</p>
          <h3>${myRewards}</h3>
        </div>
      )}
    </div>
  );
};

ProfileCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  myRewards: PropTypes.number,
};

ProfileCard.defaultProps = {
  firstName: '',
  lastName: '',
  myRewards: null,
};

export default ProfileCard;
