import moment from 'moment';

export default (from, to) => {
  // unfortunately, moment.utc() doesn't work properly
  const correctFrom = moment.unix(from.unix()) - moment().utcOffset() * 60 * 1000;
  const diff = moment(correctFrom)
    .diff(moment.utc(to));

  if (diff < 0) {
    return null;
  }

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  return {
    days,
    hours: hours - days * 24,
    minutes: minutes - hours * 60,
  };
};
