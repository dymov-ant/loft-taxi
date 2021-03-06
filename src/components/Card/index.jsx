import React from 'react';
import PropTypes from 'prop-types';
import styles from './card.module.scss';

const Card = ({ children }) => <div className={styles.card}>{children}</div>;

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
