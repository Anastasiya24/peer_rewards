import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AccountLayout from 'layouts/AccountLayout';
import Tabs from 'components/shared/Tabs';
import ProfileCard from 'components/shared/ProfileCard';
import RewardCard from 'components/shared/RewardCard';
import styles from './style.module.css';
import { mockMyAccountRewardingList } from 'mock/rewarding';
import { mockMyAccount } from 'mock/myAccount';

const RewardsList = ({ list, isOppositeUserSender = false }) => {
  return (
    <div className={styles.list}>
      {list.map((el) => (
        <RewardCard key={el._id} isOppositeUserSender={isOppositeUserSender} {...el} />
      ))}
    </div>
  );
};

const MyAccountPage = () => {
  const mockCreatedByMyRewardingList = useSelector(({ rewarding }) => rewarding.list);

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [myRewards, setMyRewards] = useState(0);

  const tabsData = [
    { index: 0, name: 'My Rewards' },
    { index: 1, name: 'Created by me Rewards' },
  ];

  useEffect(() => {
    const rewardingPrice = mockMyAccountRewardingList.reduce((tmp, r) => {
      return tmp + r.price;
    }, 0);
    setMyRewards(rewardingPrice);
  }, []);

  const components = [
    <RewardsList list={mockMyAccountRewardingList} />,
    <RewardsList list={mockCreatedByMyRewardingList} isOppositeUserSender />,
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
