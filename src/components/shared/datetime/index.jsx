import React from 'react';
import PropTypes from 'prop-types';
import DateTimePicker from 'react-datetime';
import onClickOutside from 'react-onclickoutside';
import 'react-datetime/css/react-datetime.css';
import styles from './index.module.css';

class DateTime extends React.Component {
  handleClickOutside() {
    const { onClose } = this.props;

    if (onClose) {
      onClose();
    }
  }

  render() {
    const { input, ...other } = this.props;

    return (
      <DateTimePicker
        renderInput={input}
        className={styles.container}
        {...other}
      />
    );
  }
}

DateTime.propTypes = {
  input: PropTypes.element,
  onClose: PropTypes.bool,
};

DateTime.defaultProps = {
  input: null,
  onClose: null,
};

export default onClickOutside(DateTime);
