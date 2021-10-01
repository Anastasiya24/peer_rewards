import React from 'react';
import history from 'store/history';
import AccountLayout from 'layouts/AccountLayout';
import styles from './style.module.css';
import { mockEmployeesList } from 'mock/employees';
import { mockMyAccount } from 'mock/myAccount';

const Employee = ({ _id, firstName, lastName }) => {
  return (
    <div className={styles.card} onClick={() => history.push(`/employee?id=${_id}`)}>
      <p>
        {firstName} {lastName}
      </p>
    </div>
  );
};

const HomePage = () => {
  return (
    <AccountLayout name={mockMyAccount.firstName} lastName={mockMyAccount.lastName}>
      <div>
        <h1 className={styles.employees}>Employees</h1>
        {mockEmployeesList.map((el) => (
          <Employee key={el._id} {...el} />
        ))}
      </div>
    </AccountLayout>
  );
};

export default HomePage;
