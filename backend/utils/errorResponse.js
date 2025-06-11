// Utility function for sending error responses
const sendErrorResponse = (
  res,
  status,
  error = "Something went wrong. Please try again."
) => {
  return res.status(status).json({ success: false, error });
};

module.exports = sendErrorResponse;
