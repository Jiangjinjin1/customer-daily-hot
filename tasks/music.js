const { Task } = require("../tools");
const options = {
  pageUrl: "https://y.qq.com/",
  pageSelector: ".songlist__list .songlist__item .songlist__songname_txt a",
  title: "今日Music"
};
module.exports = {
  task: async () => {
    return await Task(options, async page => {
      // 播放列表选择器
      const playSelector = ".playlist__list .playlist__item";
      await page.waitForSelector(playSelector);
      await Promise.all([
        page.waitForNavigation(),
        page.click(`${playSelector}:first-child`)
      ]);
    });
  }
};
