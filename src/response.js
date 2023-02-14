const success = (data = null, message = '') => {
  const status = 'success';

  if (!message) {
    return {
      status,
      data,
    };
  }

  if (!data) {
    return {
      status,
      message,
    };
  }

  return {
    status,
    message,
    data,
  };
};

const error = (message) => ({
  status: 'fail',
  message,
});

module.exports = { success, error };
