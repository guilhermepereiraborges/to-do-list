const validateFieldTitle = (request, response, next) => {
  const { body } = request;

  if (body.title === undefined) {
    return response.status(400).json({ msg: "The filed 'title' is required" });
  }

  if (body.title === "" || body.title === " ") {
    return response.status(400).json({ msg: "Title cannot be empty" });
  }

  next();
};

const validateFieldStatus = (request, response, next) => {
  const { body } = request;

  if (body.status === undefined) {
    return response.status(400).json({ msg: "The filed 'status' is required" });
  }

  if (body.status === "" || body.status === " ") {
    return response.status(400).json({ msg: "Status cannot be empty" });
  }

  next();
};


module.exports = {
  validateFieldTitle,
  validateFieldStatus
};
