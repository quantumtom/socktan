define(function () {

  function render() {
    require(
      [
        'hbar!parts/about',
        'data/about'
      ], function (aboutPart, aboutData) {
        var appDiv = document.getElementById('page-body');

        appDiv.innerHTML = aboutPart(aboutData);
      });
  }

  return {
    render: render
  };
});
