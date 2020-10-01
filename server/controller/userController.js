const catchAsync = require('../utils/catchAsync');

exports.getUsers = catchAsync(async (req, res, next) => {
  res.json({
    status: 'success',
    requestedAt: req.requestTime,
    data: {
      usr: 'yogi',
    },
  });
});