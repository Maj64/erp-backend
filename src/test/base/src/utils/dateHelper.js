const moment = require("moment");

const formatDate = (date, format = "YYYY-MM-DD") => {
  return moment(date).format(format);
};

const addDays = (date, days) => {
  return moment(date).add(days, "days").toDate();
};

const subtractDays = (date, days) => {
  return moment(date).subtract(days, "days").toDate();
};

module.exports = {
  formatDate,
  addDays,
  subtractDays,
};
