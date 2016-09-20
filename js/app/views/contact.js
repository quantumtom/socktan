define([
    'views/base',
    'Handlebars',
    'hbar!parts/contact',
    'json!data/contact.json'
], function (BaseView, Handlebars, contactPart, contactData) {
    'use strict';

    return BaseView.extend({
        initialize: function () {
            this.content = contactData;
            this.template = Handlebars.compile(contactPart(this.content));
        }
    });
});
