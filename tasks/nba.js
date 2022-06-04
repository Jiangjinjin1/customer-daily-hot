const { Task } = require("../tools");
const options = {
  pageUrl: "https://nba.hupu.com",
  pageSelector: ".list-container .list-item a",
  title: "今日NBA"
};
module.exports = {
  task: async () => {
    return await Task(options);
  }
};
