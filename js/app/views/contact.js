define(function () {

  function render() {
    require(
      [
        'hbar!parts/contact',
        'data/contact',
        'lib/validator'
      ], function (talkPart, talkData) {
        var appDiv = document.getElementById('page-body');

        appDiv.innerHTML = talkPart(talkData);

        $('#myForm').validator();
      });
  }

  return {
    render: render
  };
});
