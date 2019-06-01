import React from 'react';
import { getTimeDiff, getUTCDate } from '../../helpers/time';
import Input from '../../components/shared/input';
import DateTime from '../../components/shared/datetime';
import styles from './index.module.css';

export default class TimeDiff extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dateTime: getUTCDate(),
      isPickerOpened: false,
    };

    this.pickerInput = this.pickerInput.bind(this);
  }

  get difference() {
    const { dateTime } = this.state;
    const difference = getTimeDiff(getUTCDate(), dateTime);

    if (!difference) {
      return null;
    }

    const { days, hours, minutes } = difference;

    return (`
      ${days > 0 ? `${days} days, ` : ''}
      ${hours > 0 ? `${hours} hours, ` : ''}
      ${minutes > 0 ? `${minutes} minutes, ` : ''}
    `).trim().slice(0, -1);
  }

  handleChange(dateTime) {
    this.setState({ dateTime: dateTime.toDate() });
  }

  pickerInput() {
    const { dateTime } = this.state;

    return (
      <Input
        readOnly
        onClick={() => this.setState({ isPickerOpened: true })}
        value={dateTime.toLocaleString()}
      />
    );
  }

  render() {
    const { isPickerOpened, dateTime } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.pickerContainer}>
            <div className={styles.pickerText}>
              Please pick date:
            </div>

            <div className={styles.pickerInput}>
              <DateTime
                input={this.pickerInput}
                value={dateTime}
                onClose={() => this.setState({ isPickerOpened: false })}
                onChange={e => this.handleChange(e)}
                open={isPickerOpened}
              />

            </div>
          </div>

          <div className={styles.difference}>
            <div className={styles.differenceText}>
              {this.difference && (
                `Difference is ${this.difference}`
              )}

              {!this.difference && (
                'Selected date is in the future'
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
