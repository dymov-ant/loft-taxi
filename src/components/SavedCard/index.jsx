import React from 'react';
import PropTypes from 'prop-types';
import logoCard from '../../assets/img/icons/card-logo.svg';
import schemaCard from '../../assets/img/icons/card-schema.svg';
import mastercard from '../../assets/img/icons/master-card.svg';
import styles from '../ProfileForm/profileForm.module.scss';

const SavedCard = ({ cardNumber, expiryDate }) => {
  const month = new Date(expiryDate).getMonth() + 1;
  const year = new Date(expiryDate).getFullYear().toString().substr(-2);
  return (
    <div className={styles.card}>
      <div className={styles.card__top}>
        <img className={styles.card__logo} src={logoCard} alt="лого" />
        <p className={styles.card__date}>{`${month}/${year}`}</p>
      </div>
      <p className={styles.card__number}>
        {cardNumber.split(' ').map((block, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={i}>{block}</span>
        ))}
      </p>
      <div className={styles.card__bottom}>
        <img className={styles.card__schema} src={schemaCard} alt="чип" />
        <img className={styles.card__mastercard} src={mastercard} alt="mastercard" />
      </div>
    </div>
  );
};

SavedCard.propTypes = {
  cardNumber: PropTypes.string.isRequired,
  expiryDate: PropTypes.string.isRequired,
};

export default SavedCard;
