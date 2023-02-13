const success = (data, message = '') => {
  const status = 'success';

  if (message) {
    return {
      status,
      message,
      data,
    };
  }

  return {
    status,
    data,
  };
};

const error = (message) => ({
  status: 'fail',
  message,
});

module.exports = { success, error };
