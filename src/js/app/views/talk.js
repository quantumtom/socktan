define(function () {

  function render() {
    require(
        [
          'hbar!parts/talk',
          'data/talk'
        ], function (talkPart, talkData) {
          var appDiv = document.getElementById('page-body');

          appDiv.innerHTML = talkPart(talkData);
        });
  }

  return {
    render: render
  };
});
