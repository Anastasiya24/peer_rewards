import React from 'react';
import history from 'store/history';
import AccountLayout from 'layouts/AccountLayout';
import ProfileCard from 'components/shared/ProfileCard';
import RewardCard from 'components/shared/RewardCard';
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

const MyAccountPage = () => {
  // TODO
  const name = 'Anana';
  const lastName = 'Sasha';
  return (
    <AccountLayout name={name} lastName={lastName}>
      <div>
        <ProfileCard firstName={name} lastName={lastName} />
        TABS
        <div className={styles.list}>
          {mockRewardingList.map((el) => (
            <RewardCard key={el._id} {...el} />
          ))}
        </div>
      </div>
    </AccountLayout>
  );
};

export default MyAccountPage;
