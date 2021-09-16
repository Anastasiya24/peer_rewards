import React from 'react';
import PropTypes from 'prop-types';
import history from 'store/history';
import { starSvg } from 'assets/icons';
import styles from './style.module.css';

const AccountLayout = ({ name, lastName, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo} onClick={() => history.push('/')}>
          <img src={starSvg} alt="" />
        </div>
        <div className={styles.profileIcon} onClick={() => history.push('/my-account')}>
          {name?.substring(0, 1)?.toUpperCase()}
          {lastName?.substring(0, 1)?.toUpperCase()}
        </div>
      </div>
      <div className={styles.content}>{children}</div>

      <div className={styles.footer}>
        <div className={styles.logo} onClick={() => history.push('/')}>
          <img src={starSvg} alt="" />
        </div>
        <p>Peer Rewards</p>
      </div>
    </div>
  );
};

AccountLayout.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default AccountLayout;
