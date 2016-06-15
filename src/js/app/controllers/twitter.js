define(['views/twitter'], function(twitterView){

    function start() {
        twitterView.render();
    }

    return {
        start:start
    };
});