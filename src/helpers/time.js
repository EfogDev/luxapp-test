const dateToUnixUtc = (date) => {
  const fields = [
    'getFullYear',
    'getMonth',
    'getDate',
    'getHours',
    'getMinutes',
    'getSeconds',
    'getMilliseconds',
  ];

  return Date.UTC(...fields.map(field => date[field]()));
};

const getUTCOffset = () => dateToUnixUtc(new Date()) - new Date().getTime();

const getUTCDate = date => new Date((date || new Date()).getTime() - getUTCOffset());

const getTimeDiff = (from, to) => {
  const diff = getUTCDate(from).getTime() - getUTCDate(to).getTime();

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

export {
  getUTCDate,
  getTimeDiff,
};
