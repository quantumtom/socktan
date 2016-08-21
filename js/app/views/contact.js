define([
    'backbone',
    'jquery',
    'hbar!parts/contact',
    'validator'
], function (Backbone, $, contactPart) {

    var ContactView = Backbone.View.extend({
        render: function () {
            "use strict";

            var contactData = {
                title: 'contact',
                lead: 'let\'s chat',
                body: 'Whether you are a human or a robot, we would love to hear from you (robots are often more ' +
                'interesting). We can get started on your project right away.'
            };

            this.$el.html(contactPart(contactData));

            $('#myForm').validator();
        }
    });

    return ContactView;
});
