import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Tab = ({ name, isActive, setActiveTabIndex }) => {
  return (
    <div
      className={`${styles.tab} ${isActive && styles.activeTab}`}
      onClick={setActiveTabIndex}
    >
      {name}
    </div>
  );
};

const Tabs = ({ tabsData, activeTabIndex, setActiveTabIndex, children }) => {
  return (
    <div>
      <div className={styles.tabs}>
        {tabsData.map(({ name, index }) => (
          <Tab
            key={index}
            name={name}
            isActive={index === activeTabIndex}
            setActiveTabIndex={() => setActiveTabIndex(index)}
          />
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
};

Tabs.propTypes = {
  tabsData: PropTypes.array.isRequired,
  activeTabIndex: PropTypes.number.isRequired,
  setActiveTabIndex: PropTypes.func.isRequired,
};

export default Tabs;
