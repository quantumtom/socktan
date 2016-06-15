define(function () {

  function render() {
    require(
        [
          'hbar!parts/reel',
          'data/reel'
        ], function (reelPart, reelData) {
          var appDiv = document.getElementById('page-body');

          appDiv.innerHTML = reelPart(reelData);
        });
  }

  return {
    render: render
  };
});
