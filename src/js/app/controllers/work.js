define(['views/work'], function (workView) {

  function start() {
    workView.render();
  }

  return {
    start: start
  };
});