const { Task } = require("../tools");
const options = {
  pageUrl: "https://www.toutiao.com/",
  pageSelector: ".feed-card-wrapper .feed-card-article-l a.title",
  title: "今日头条"
};
module.exports = {
  task: async () => {
    return await Task(options);
  }
};
