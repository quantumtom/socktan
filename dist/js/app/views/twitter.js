define(function () {

  function render() {
    require(
      [
        'hbar!parts/twitter',
        'data/twitter'
      ], function (twitterPart, twitterData) {
        var appDiv = document.getElementById('page-body');

        appDiv.innerHTML = twitterPart(twitterData);
      });
  }

  return {
    render: render
  };
});
