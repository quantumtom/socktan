define([
    'views/base',
    'hbar!parts/about',
    'models/about'
], function (BaseView, aboutPart, AboutModel) {
    "use strict";

    return BaseView.extend({
        initialize: function () {
            this.model = new AboutModel();
            this.content = this.model.attributes.content;
            this.model.bind("change", this.render, this);
        },
        render: function () {
            this.$el.html(aboutPart(this.content));

            return this;
        },
        onClose: function(){
            this.model.unbind("change", this.render);
        }
    });
});
