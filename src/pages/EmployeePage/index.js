import React, { useEffect, useState } from 'react';
import history from 'store/history';
import AccountLayout from 'layouts/AccountLayout';
import CreateRewardForm from 'components/CreateRewardForm';
import Modal from 'components/shared/Modal';
import ProfileCard from 'components/shared/ProfileCard';
import RewardCard from 'components/shared/RewardCard';
import { plusSvg } from 'assets/icons';
import styles from './style.module.css';
import { mockRewardingList } from 'mock/rewarding';
import { mockMyAccount } from 'mock/myAccount';
import { mockEmployeesList } from 'mock/employees';

const EmployeePage = () => {
  const [employeeInfo, setEmployeeInfo] = useState({});
  const [rewardingList, setRewardingList] = useState(mockRewardingList);
  const [isOpenRewardsModal, setRewardsModal] = useState(false);

  useEffect(() => {
    const userId = history.location?.search?.replace('?id=', '');
    const employee = mockEmployeesList.find(({ _id }) => _id === userId);
    setEmployeeInfo(employee);
    const newRewardingList = mockRewardingList.filter(({ user }) => user._id !== userId);
    setRewardingList(newRewardingList);
  }, []);

  return (
    <AccountLayout name={mockMyAccount.firstName} lastName={mockMyAccount.lastName}>
      <>
        <div>
          <ProfileCard
            firstName={employeeInfo?.firstName}
            lastName={employeeInfo?.lastName}
          />

          <div className={styles.list}>
            {rewardingList.map((el) => (
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
