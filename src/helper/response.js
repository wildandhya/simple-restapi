module.exports = {
  success: (res, status, message, data) => {
    const responseObj = {
      status,
      message,
      data,
    };
    res.status(status).json(responseObj);
  },
  error: (res, status, message,  err) => {
    const responseObj = {
      status,
      message,
      error: err,
    };
    res.status(status).json(responseObj);
  },
};
