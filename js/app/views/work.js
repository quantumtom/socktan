define(function () {

  function render() {
    require(
      [
        'hbar!parts/work',
        'data/work'
      ], function (workPart, workData) {
        var appDiv = document.getElementById('page-body');

        appDiv.innerHTML = workPart(workData);
      });
  }

  return {
    render: render
  };
});
