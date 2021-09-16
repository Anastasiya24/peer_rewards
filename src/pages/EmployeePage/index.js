import React, { useState } from 'react';
import history from 'store/history';
import AccountLayout from 'layouts/AccountLayout';
import Modal from 'components/shared/Modal';
import styles from './style.module.css';

const EmployeePage = () => {
  const [isOpenRewardsModal, setRewardsModal] = useState(false);

  return (
    // TODO
    <AccountLayout name="Anana" lastName="Sasha">
      <>
        <div>
          <h1>Empl</h1>
          <div className={styles.button} onClick={() => setRewardsModal(true)}>
            +
          </div>
        </div>
        {isOpenRewardsModal && (
          <Modal onClose={() => setRewardsModal(false)} title="Create Reward">
            Rewards
          </Modal>
        )}
      </>
    </AccountLayout>
  );
};

export default EmployeePage;
