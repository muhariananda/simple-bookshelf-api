const success = (message, data) => ({
  status: 'success',
  message,
  data,
});

const error = (message) => ({
  status: 'fail',
  message,
});

module.exports = { success, error };
