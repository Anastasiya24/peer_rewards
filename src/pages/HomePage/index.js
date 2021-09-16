import React from 'react';
import history from 'store/history';
import AccountLayout from 'layouts/AccountLayout';
import styles from './style.module.css';

const employeeMock = [
  {
    _id: '1',
    firstName: 'Kira',
    lastName: 'Naire',
  },
  {
    _id: '2',
    firstName: 'Fysdsd',
    lastName: 'Bgfgd',
  },
  {
    _id: '3',
    firstName: 'Fdasfs',
    lastName: 'Vfgfg',
  },
];

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
    // TODO
    <AccountLayout name="Anana" lastName="Sasha">
      <div>
        <h1 className={styles.employees}>Employees</h1>
        {employeeMock.map((el) => (
          <Employee key={el._id} {...el} />
        ))}
      </div>
    </AccountLayout>
  );
};

export default HomePage;
