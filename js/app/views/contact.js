define([
    'views/base',
    'hbar!parts/contact',
    'models/contact'
], function (BaseView, contactPart, ContactModel) {
    "use strict";

    var ContactView = BaseView.extend({
        initialize: function () {
            var contactModel = new ContactModel();
            this.model = contactModel;
            this.content = this.model.attributes.content;
        },
        render: function () {
            this.$el.html(contactPart(this.content));

            return this;
        }
    });

    return ContactView;
});
