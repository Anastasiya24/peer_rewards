import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import history from 'store/history';
import { v4 as uuidv4 } from 'uuid';
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
import { addRewarding } from 'store/reducers/rewarding';
import { useSelector } from 'react-redux';

const EmployeePage = () => {
  const userId = history.location?.search?.replace('?id=', '');
  console.log('userId: ', userId);
  const rewarding = useSelector(({ rewarding }) => rewarding.list);

  const [employeeInfo, setEmployeeInfo] = useState({});
  const [rewardingList, setRewardingList] = useState([]);
  const [isOpenRewardsModal, setRewardsModal] = useState(false);

  const dispatch = useDispatch();

  // BUG
  useEffect(() => {
    const employee = mockEmployeesList.find(({ _id }) => _id === userId);
    setEmployeeInfo(employee);
    const newRewardingList = mockRewardingList.filter(
      ({ toUser }) => toUser._id === userId
    );
    setRewardingList(newRewardingList);
  }, []);

  useEffect(() => {
    if (rewarding?.length) {
      const newList = Array.from(rewardingList);
      rewarding.map((el) => {
        if (el.toUser._id === userId) newList.push(el);
      });

      setRewardingList(newList);
    }
  }, [rewarding]);

  const createReward = (price, text) => {
    const data = {
      _id: uuidv4(),
      from: mockMyAccount,
      toUser: employeeInfo,
      price: +price,
      text,
      date: `${new Date().getDate()}.${
        new Date().getMonth() + 1
      }.${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`,
    };
    dispatch(addRewarding(data));
    setRewardsModal(false);
  };

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
            <CreateRewardForm onCreateReward={createReward} />
          </Modal>
        )}
      </>
    </AccountLayout>
  );
};

export default EmployeePage;
