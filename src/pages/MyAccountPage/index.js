import React, { useState } from 'react';
import AccountLayout from 'layouts/AccountLayout';
import Tabs from 'components/shared/Tabs';
import ProfileCard from 'components/shared/ProfileCard';
import RewardCard from 'components/shared/RewardCard';
import styles from './style.module.css';

const mockMyRewardingList = [
  {
    _id: 1,
    user: {
      _id: '1',
      firstName: '1Nera',
      lastName: '1Liy',
    },
    date: '12.09.2021 11:40',
    text: `1Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Nisi qui laboriosam accusantium cupiditate at recusandae facere
     aspernatur harum eos, numquam iste, quos quaerat, debitis ab. 
     Deleniti nihil blanditiis sequi itaque?`,
  },
  {
    _id: 2,
    user: {
      _id: '2',
      firstName: '1Kira',
      lastName: '1Naire',
    },
    date: '12.09.2021 11:57',
    text: `1Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Nisi qui laboriosam accusantium cupiditate at recusandae facere
     aspernatur harum eos, numquam iste, quos quaerat, debitis ab. 
     Deleniti nihil blanditiis sequi itaque?`,
  },
];

const mockRewardingList = [
  {
    _id: 1,
    user: {
      _id: '1',
      firstName: '2Nera',
      lastName: '2Liy',
    },
    date: '12.09.2021 11:40',
    text: `2Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Nisi qui laboriosam accusantium cupiditate at recusandae facere
     aspernatur harum eos, numquam iste, quos quaerat, debitis ab. 
     Deleniti nihil blanditiis sequi itaque?`,
  },
  {
    _id: 2,
    user: {
      _id: '2',
      firstName: '2Kira',
      lastName: '2Naire',
    },
    date: '12.09.2021 11:57',
    text: `2Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Nisi qui laboriosam accusantium cupiditate at recusandae facere
     aspernatur harum eos, numquam iste, quos quaerat, debitis ab. 
     Deleniti nihil blanditiis sequi itaque?`,
  },
];

const RewardsList = ({ list }) => {
  return (
    <div className={styles.list}>
      {list.map((el) => (
        <RewardCard key={el._id} {...el} />
      ))}
    </div>
  );
};

const MyAccountPage = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  // TODO
  const name = 'Anana';
  const lastName = 'Sasha';

  const tabsData = [
    { index: 0, name: 'My Rewards' },
    { index: 1, name: 'Created by me Rewards' },
  ];

  const components = [
    <RewardsList list={mockMyRewardingList} />,
    <RewardsList list={mockRewardingList} />,
  ];

  return (
    <AccountLayout name={name} lastName={lastName}>
      <div>
        <ProfileCard firstName={name} lastName={lastName} myRewards="200" />
        <Tabs
          tabsData={tabsData}
          activeTabIndex={activeTabIndex}
          setActiveTabIndex={setActiveTabIndex}
        >
          {components[activeTabIndex]}
        </Tabs>
      </div>
    </AccountLayout>
  );
};

export default MyAccountPage;
