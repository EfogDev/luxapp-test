import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const Input = ({ className, containerClassName, ...other }) => (
  <span className={classnames(styles.container, containerClassName)}>
    <input {...other} className={classnames(styles.input, className)} />
  </span>
);

Input.propTypes = {
  className: PropTypes.string,
  containerClassName: PropTypes.string,
};

Input.defaultProps = {
  className: null,
  containerClassName: null,
};

export default Input;
