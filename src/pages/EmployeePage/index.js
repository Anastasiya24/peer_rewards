import React, { useEffect, useState } from 'react';
import history from 'store/history';
import AccountLayout from 'layouts/AccountLayout';
import CreateRewardForm from 'components/CreateRewardForm';
import Modal from 'components/shared/Modal';
import ProfileCard from 'components/shared/ProfileCard';
import RewardCard from 'components/shared/RewardCard';
import { plusSvg } from 'assets/icons';
import styles from './style.module.css';

const mockRewardingList = [
  {
    _id: 1,
    user: {
      _id: '1',
      firstName: 'Nera',
      lastName: 'Liy',
    },
    date: '12.09.2021 11:40',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Nisi qui laboriosam accusantium cupiditate at recusandae facere
     aspernatur harum eos, numquam iste, quos quaerat, debitis ab. 
     Deleniti nihil blanditiis sequi itaque?`,
  },
  {
    _id: 2,
    user: {
      _id: '2',
      firstName: 'Kira',
      lastName: 'Naire',
    },
    date: '12.09.2021 11:57',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Nisi qui laboriosam accusantium cupiditate at recusandae facere
     aspernatur harum eos, numquam iste, quos quaerat, debitis ab. 
     Deleniti nihil blanditiis sequi itaque?`,
  },
];

const mockUser = {
  _id: '3',
  firstName: 'Fdasfs',
  lastName: 'Vfgfg',
};

const EmployeePage = () => {
  const [isOpenRewardsModal, setRewardsModal] = useState(false);

  // TODO
  const name = 'Anana';
  const lastName = 'Sasha';

  useEffect(() => {
    const userId = history.location?.search?.replace('?id=', '');
    // TODO GET USER INFO
    console.log(userId);
  }, []);

  return (
    <AccountLayout name={name} lastName={lastName}>
      <>
        <div>
          <ProfileCard firstName={mockUser.firstName} lastName={mockUser.lastName} />

          <div className={styles.list}>
            {mockRewardingList.map((el) => (
              <RewardCard key={el._id} {...el} />
            ))}
          </div>

          <div className={styles.button} onClick={() => setRewardsModal(true)}>
            <img src={plusSvg} alt=" " />
          </div>
        </div>
        {isOpenRewardsModal && (
          <Modal onClose={() => setRewardsModal(false)} title="Create Reward">
            <CreateRewardForm onCreateReward={() => {}} />
          </Modal>
        )}
      </>
    </AccountLayout>
  );
};

export default EmployeePage;
