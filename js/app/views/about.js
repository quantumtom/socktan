define([
    'views/base',
    'Handlebars',
    'hbar!parts/about'
], function (BaseView, Handlebars, aboutPart) {
    'use strict';

    return BaseView.extend({
        initialize: function () {
            this.template = Handlebars.compile(aboutPart());
        }
    });
});
