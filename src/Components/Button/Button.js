import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ onFetchImages }) => {
  return (
    <button type="button" className={styles.button} onClick={onFetchImages}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onFetchImages: PropTypes.func.isRequired,
};

export default Button;
