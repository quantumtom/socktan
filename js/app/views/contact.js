define([
    'views/base',
    'hbar!parts/contact',
    'models/contact'
], function (BaseView, contactPart, ContactModel) {
    "use strict";

    return BaseView.extend({
        initialize: function () {
            this.model = new ContactModel();
            this.content = this.model.attributes.content;
            this.model.bind("change", this.render, this);
        },
        render: function () {
            this.$el.html(contactPart(this.content));

            return this;
        },
        onClose: function() {
            this.model.unbind("change", this.render);
        }
    });
});
