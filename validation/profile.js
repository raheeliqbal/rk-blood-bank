const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.blood = !isEmpty(data.blood) ? data.blood : "";
  data.dateofbirth = !isEmpty(data.dateofbirth) ? data.dateofbirth : "";
  data.location = !isEmpty(data.location) ? data.location : "";

  if (Validator.isEmpty(data.blood)) {
    errors.blood = "Blood Group field is required";
  }

  if (Validator.isEmpty(data.dateofbirth)) {
    errors.dateofbirth = "Date of Birth field is required";
  }

  if (Validator.isEmpty(data.location)) {
    errors.location = "Location field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
