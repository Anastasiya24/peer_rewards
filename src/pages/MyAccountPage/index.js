import React, { useEffect, useState } from 'react';
import AccountLayout from 'layouts/AccountLayout';
import Tabs from 'components/shared/Tabs';
import ProfileCard from 'components/shared/ProfileCard';
import RewardCard from 'components/shared/RewardCard';
import styles from './style.module.css';
import { mockRewardingList } from 'mock/rewarding';
import { mockMyAccount } from 'mock/myAccount';

// TODO
const mockCreatedByMyRewardingList = [
  {
    _id: 1,
    user: {
      _id: '2',
      firstName: 'Kira',
      lastName: 'Donovan',
    },
    price: 130,
    date: '30.09.2021 15:34',
    text: `1 - Lorem ipsum dolor sit amet consectetur adipisicing elit`,
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
  const [myRewards, setMyRewards] = useState(0);

  const tabsData = [
    { index: 0, name: 'My Rewards' },
    { index: 1, name: 'Created by me Rewards' },
  ];

  useEffect(() => {
    const rewardingPrice = mockRewardingList.reduce((tmp, r) => {
      return tmp + r.price;
    }, 0);
    setMyRewards(rewardingPrice);
  }, []);

  const components = [
    <RewardsList list={mockRewardingList} />,
    <RewardsList list={mockCreatedByMyRewardingList} />,
  ];

  return (
    <AccountLayout name={mockMyAccount.firstName} lastName={mockMyAccount.lastName}>
      <div>
        <ProfileCard
          firstName={mockMyAccount.firstName}
          lastName={mockMyAccount.lastName}
          myRewards={myRewards}
        />
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
