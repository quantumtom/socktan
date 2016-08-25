define([
    'backbone',
    'hbar!parts/contact'
], function (Backbone, contactPart) {
    "use strict";

    var ContactView = Backbone.View.extend({
        el: '#page-body',
        render: function () {
            var contactData = {
                title: 'contact',
                lead: 'let\'s chat',
                body: 'Whether you are a human or a robot, we would love to hear from you (robots are often more ' +
                'interesting). We can get started on your project right away.'
            };

            this.$el.html(contactPart(contactData));
        }
    });

    return ContactView;
});
