import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/shared/Button';
import Input from 'components/shared/Input';
import styles from './style.module.css';

const CreateRewardForm = ({ onCreateReward }) => {
  const [rewardPrice, setRewardPrice] = useState('');
  const [reason, setReason] = useState('');

  return (
    <div className={styles.wrapper}>
      <Input
        value={rewardPrice}
        onChange={(e) => setRewardPrice(e?.target?.value)}
        placeholder="Reward $"
      />
      <Input
        value={reason}
        onChange={(e) => setReason(e?.target?.value)}
        placeholder="Reason"
      />
      <Button
        text="Create"
        onClick={() => onCreateReward({ rewardPrice, reason })}
        invalid={!rewardPrice || !reason}
        className={styles.button}
      />
    </div>
  );
};

CreateRewardForm.propTypes = {
  onCreateReward: PropTypes.func.isRequired,
};

export default CreateRewardForm;
