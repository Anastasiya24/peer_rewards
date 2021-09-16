import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const ProfileCard = ({ firstName, lastName }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.profileIcon}>
        {firstName?.substring(0, 1)?.toUpperCase()}
        {lastName?.substring(0, 1)?.toUpperCase()}
      </div>
      <p>
        {firstName} {lastName}
      </p>
    </div>
  );
};

ProfileCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default ProfileCard;
