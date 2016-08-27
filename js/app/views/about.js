define([
    'views/base',
    'hbar!parts/about',
    'models/about'
], function (BaseView, aboutPart, AboutModel) {
    "use strict";

    var AboutView = BaseView.extend({
        initialize: function () {
            var aboutModel = new AboutModel();
            this.model = aboutModel;
            this.content = this.model.attributes.content;
        },
        render: function () {
            this.$el.html(aboutPart(this.content));

            return this;
        }
    });

    return AboutView;
});
