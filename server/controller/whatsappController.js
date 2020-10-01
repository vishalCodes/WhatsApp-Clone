const catchAsync = require('../utils/catchAsync');

exports.getWhatsApp = catchAsync(async (req, res, next) => {
  res.json({
    status: 'success',
    requestedAt: req.requestTime,
    data: {
      usr: 'yogi',
    },
  });
});